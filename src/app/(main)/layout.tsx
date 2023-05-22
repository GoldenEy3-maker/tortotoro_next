import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Sidebar/>
      <div className="page-content _container">
        <Header/>
        {children}
      </div>
    </>
  )
}

export default MainLayout
