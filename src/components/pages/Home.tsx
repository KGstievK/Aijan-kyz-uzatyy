"use client"
import FormGuest from "./FormGuest/FormGuest"

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "flex-start",
      gap: '50px',
      position: "relative",
    }}>
      <FormGuest/>
    </div>

  )
}

export default Home