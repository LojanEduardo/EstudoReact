import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";

function App() {

  return (
    <>
      <Header />
      <main>
        <Post title = "Primeiro Post" readingTime={5}>
          <p>Introdução</p>
          <p>Ideia</p>
          <p>Conclusão</p>
        </Post>
        <Post title = "Segundo Post" readingTime={1}>
          <p>
            <em>Ideia</em>
          </p>         
        </Post>
      </main>
      <Footer />    
    </>
  );
}

export default App;
