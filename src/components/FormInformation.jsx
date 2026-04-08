import { useState } from "react";

export default function FormInformation() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    cccd: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
  });

  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Vui lòng nhập họ tên";

    if (!form.cccd) {
      newErrors.cccd = "Vui lòng nhập CCCD";
    } else if (!/^[0-9]{12}$/.test(form.cccd)) {
      newErrors.cccd = "CCCD phải đủ 12 số";
    }

    if (!form.email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!form.phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0|\+84)[0-9]{9}$/.test(form.phone)) {
      newErrors.phone = "SĐT không hợp lệ";
    }

    if (!form.address) newErrors.address = "Vui lòng nhập địa chỉ";

    if (!form.gender) newErrors.gender = "Vui lòng chọn giới tính";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStep(2);
    }
  };

  const handleFinalSubmit = () => {
    if (!front || !back) {
      alert("Vui lòng upload đủ 2 ảnh CCCD");
      return;
    }

    // 👉 chuyển sang QR
    setStep(3);
  };

  return (
    <div className="w-full">

      {/* TITLE */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          {step === 1 && "Thông tin đăng ký"}
          {step === 2 && "Tải CCCD"}
          {step === 3 && "Thanh toán"}
        </h2>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            className="w-full px-4 py-3 rounded-xl 
            bg-[#f9f9f9] 
            border border-gray-200 
            focus:border-[#c89b7b] 
            focus:ring-2 focus:ring-[#c89b7b]/20 
            outline-none 
            transition-all duration-200 
            mb-3"
            placeholder="Họ tên"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

          {/* CCCD */}
          <input
            className="w-full px-4 py-3 rounded-xl 
            bg-[#f9f9f9] 
            border border-gray-200 
            focus:border-[#c89b7b] 
            focus:ring-2 focus:ring-[#c89b7b]/20 
            outline-none 
            transition-all duration-200 
            mb-3"
            placeholder="Số CCCD"
            value={form.cccd}
            onChange={(e) =>
              setForm({ ...form, cccd: e.target.value })
            }
          />
          {errors.cccd && <p className="text-red-500 text-sm mb-2">{errors.cccd}</p>}

          {/* EMAIL */}
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl 
            bg-[#f9f9f9] 
            border border-gray-200 
            focus:border-[#c89b7b] 
            focus:ring-2 focus:ring-[#c89b7b]/20 
            outline-none 
            transition-all duration-200 
            mb-3"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

          {/* PHONE */}
          <input
            className="w-full px-4 py-3 rounded-xl 
            bg-[#f9f9f9] 
            border border-gray-200 
            focus:border-[#c89b7b] 
            focus:ring-2 focus:ring-[#c89b7b]/20 
            outline-none 
            transition-all duration-200 
            mb-3"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />
          {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

          {/* ADDRESS */}
          <input
            className="w-full px-4 py-3 rounded-xl 
            bg-[#f9f9f9] 
            border border-gray-200 
            focus:border-[#c89b7b] 
            focus:ring-2 focus:ring-[#c89b7b]/20 
            outline-none 
            transition-all duration-200 
            mb-3"
            placeholder="Địa chỉ"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
          {errors.address && <p className="text-red-500 text-sm mb-2">{errors.address}</p>}

          {/* GENDER */}
          <select
            className="w-full px-4 py-3 rounded-xl 
            bg-[#f9f9f9] 
            border border-gray-200 
            focus:border-[#c89b7b] 
            focus:ring-2 focus:ring-[#c89b7b]/20 
            outline-none 
            transition-all duration-200 
            mb-3"
            value={form.gender}
            onChange={(e) =>
              setForm({ ...form, gender: e.target.value })
            }
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mb-2">{errors.gender}</p>}

          <button className="w-full bg-[#c89b7b] text-white py-3 rounded-lg mt-3 hover:opacity-90 transition">
            Tiếp tục
          </button>
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* FRONT */}
            <label className="flex-1 border-2 border-dashed rounded-xl p-3 text-center cursor-pointer hover:border-[#c89b7b] transition">
              <p className="text-sm mb-2">Mặt trước</p>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setFront(
                    URL.createObjectURL(e.target.files[0])
                  )
                }
              />

              {front ? (
                <img src={front} className="rounded-lg w-full" />
              ) : (
                <p className="text-xs text-gray-400">Chọn ảnh</p>
              )}
            </label>

            {/* BACK */}
            <label className="flex-1 border-2 border-dashed rounded-xl p-3 text-center cursor-pointer hover:border-[#c89b7b] transition">
              <p className="text-sm mb-2">Mặt sau</p>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setBack(
                    URL.createObjectURL(e.target.files[0])
                  )
                }
              />

              {back ? (
                <img src={back} className="rounded-lg w-full" />
              ) : (
                <p className="text-xs text-gray-400">Chọn ảnh</p>
              )}
            </label>
          </div>

          <button
            onClick={handleFinalSubmit}
            className="w-full bg-[#c89b7b] text-white py-3 rounded-lg mt-4"
          >
            Xác nhận
          </button>

          <button
            onClick={() => setStep(1)}
            className="w-full text-sm text-gray-500 mt-2"
          >
            ← Quay lại
          </button>
        </>
      )}

      {/* STEP 3 - QR */}
      {step === 3 && (
        <div className="text-center">
          <p className="mb-3 text-sm text-gray-600">
            Quét mã QR để thanh toán
          </p>

          {/* QR IMAGE */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ThanhToanVisa123"
            alt="QR Code"
            className="mx-auto rounded-lg border"
          />

          <p className="mt-3 text-xs text-gray-500">
            Nội dung: Thanh toán visa
          </p>

          <button
            onClick={() => alert("Đã thanh toán (demo)")}
            className="w-full bg-green-600 text-white py-3 rounded-lg mt-4"
          >
            Tôi đã thanh toán
          </button>

          <button
            onClick={() => setStep(2)}
            className="w-full text-sm text-gray-500 mt-2"
          >
            ← Quay lại
          </button>
        </div>
      )}
    </div>
  );
}