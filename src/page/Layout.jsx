import Counter from "../components/Counter";
import DemoPrimeTest from "../components/DemoPrimeTest";
import Header from "../components/Header";
import Input from "../components/Input";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <Counter></Counter>
        <Input></Input>
        <DemoPrimeTest></DemoPrimeTest>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
