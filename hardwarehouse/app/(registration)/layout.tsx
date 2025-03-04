import Header from "@/components/header";

export default function RegistrationLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <Header SEARCH_BAR_VISIBLE={true}/>
        {children}
      </div>
    );
  }