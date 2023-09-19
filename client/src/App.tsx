import { useState, useEffect } from "react";
import Chat from "./components/chat/chat";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
// import History from './components/history/history';
import Login from "./components/auth/auth";
import styles from "./App.module.css";
import client from "./feathers";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

interface User {
  id: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null); // Add a user state variable or use your authentication logic to determine if a user is logged in
  //const [testUser, setTestuser] = useState<any>(null);

  useEffect(() => {
    // Check if user login data exists in localStorage
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //creates a listener for the login event, will set the user accordingly
  useEffect(() => {
    client.on("login", ({ user }: { user: User }) => {
      setUser(user);
    });

    client.on("logout", () => setUser(null));

    const reAuthenticate = async () => {
      try {
        await client.reAuthenticate();
      } catch (error) {
        setUser(null);
      }
    };

    reAuthenticate();
  });

  const particlesInit = useCallback(async (engine: Engine) => {
    //console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    [],
  );

  return (
    <div className={styles.container}>
      {false && (
        <Particles
          id="tsparticles"
          className="tsparticlesClass"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00ccff",
              },
              links: {
                color: "#00ccff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
            fullScreen: true,
          }}
        />
      )}

      {user ? ( // Render the chat components if login was completed
        <>
          <div className={styles.container__right}>
            <Header title={`${user.email}`} />
            <Chat user={user} />
            <Footer year={2023} text={"vConestoga AI & Backend Research"} />
          </div>
        </>
      ) : (
        // Render the login component if there is no user record
        <div className={styles.login}>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
