import Header from "../components/Header";
import Hero from "../components/Hero";
// import header from "../components/header";
// import hero from "../components/hero";
const layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default layout;
