import React, { useState } from "react";

export default function CustomerRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!form.name) return "Chưa nhập tên";
    if (!form.phone || form.phone.length < 9) return "Số điện thoại không hợp lệ";
    if (form.email && !form.email.includes("@")) return "Email không hợp lệ";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setMessage(error);
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // 👉 gửi về Google Sheet hoặc backend
      const res = await fetch("YOUR_API_URL", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Đăng ký thành công!");
        setForm({
          name: "",
          phone: "",
          email: "",
          address: "",
          note: "",
        });
      } else {
        setMessage("Có lỗi xảy ra");
      }
    } catch (err) {
      setMessage("Không kết nối được server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Đăng ký thông tin</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Họ và tên *"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="phone"
          placeholder="Số điện thoại *"
          value={form.phone}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="address"
          placeholder="Địa chỉ"
          value={form.address}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="note"
          placeholder="Ghi chú"
          value={form.note}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Đang gửi..." : "Đăng ký ngay"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
  },
  textarea: {
    padding: "10px",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    background: "#ff5722",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};