import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <Header SEARCH_BAR_VISIBLE={true}/>
        {children}
        <Footer/>
      </div>
    );
  }