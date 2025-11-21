import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0eafc 50%, #c7d2fe 100%)",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        color: "#1e293b",
      }}
    >
      {/* Navbar */}
      Navbar */}
      <nav
        style={{
          padding: "20px 40px",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "800",
            background: "linear-gradient(to right, #2563eb, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PayFast
        </h1>
        <button
          onClick={() => navigate("/signin")}
          style={{
            fontSize: "17px",
            fontWeight: "600",
            color: "#374151",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.color = "#4f46e5")}
          onMouseOut={(e) => (e.target.style.color = "#374151")}
        >
          Sign In →
        </button>
      </nav>

      {/* Hero Section */}
      <div
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "62px",
            fontWeight: "900",
            lineHeight: "1.1",
            marginBottom: "24px",
          }}
        >
          Send Money
          <br />
          <span
            style={{
              background: "linear-gradient(to right, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Instantly & Securely
          </span>
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#475569",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          Transfer to friends, split bills, or pay anyone — fast, free, and fully encrypted.
        </p>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "18px 40px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
              background: "linear-gradient(to right, #2563eb, #4f46e5)",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.boxShadow = "0 20px 40px rgba(37, 99, 235, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 25px rgba(37, 99, 235, 0.3)";
            }}
          >
            Get Started – It's Free
          </button>

          <button
            style={{
              padding: "18px 40px",
              fontSize: "20px",
              fontWeight: "600",
              color: "#374151",
              background: "white",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "#818cf8";
              e.target.style.color = "#4f46e5";
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "#e2e8f0";
              e.target.style.color = "#374151";
            }}
          >
            Watch Demo
          </button>
        </div>
      </div>

      {/* Features Cards */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "100px auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {[
          { title: "Lightning Fast", desc: "Money arrives in seconds, not days", icon: "Fast" },
          { title: "Bank-Level Security", desc: "Encrypted end-to-end. Always.", icon: "Secure" },
          { title: "Zero Hidden Fees", desc: "You see exactly what you pay", icon: "Money" },
        ].map((f, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              padding: "40px 30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.4)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                borderRadius: "16px",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "32px",
              }}
            >
              {f.icon}
            </div>
            <h3 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "12px" }}>
              {f.title}
            </h3>
            <p style={{ fontSize: "17px", color: "#64748b" }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div
        style={{
          background: "linear-gradient(to right, #4f46e5, #7c3aed)",
          padding: "90px 20px",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h2 style={{ fontSize: "48px", fontWeight: "800", color: "white", marginBottom: "30px" }}>
          Ready to send money smarter?
        </h2>
        <button
          onClick={() => navigate("/signup")}
          style={{
            padding: "20px 50px",
            fontSize: "22px",
            fontWeight: "700",
            color: "#4f46e5",
            background: "white",
            border: "none",
            borderRadius: "14px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Sign Up in 2 Minutes
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<HomePage />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
