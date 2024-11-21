import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import * as z from "zod";
import s from "./ModalComponent.module.css";
import { useEffect, useRef } from "react";

const schema = z.object({
  name: z.string().min(2, "Имя должно содержать хотя бы 2 буквы."),
  mail: z.string().email("Неверный Email!"),
  about: z.string().min(3, "Напишите одно или пару слов"),
  surname: z.string().min(1, "Фамилия должна содержать хотя-бы одну букву"),
  image: z.instanceof(FileList).refine(
    (files) => {
      if (!files[0]) return true;
      else {
        const check = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/webp",
        ].includes(files[0].type);
        return check;
      }
    }, // Проверка типа файла
    "Только файлы .jpg, .jpeg, .webp и .png поддерживаются"
  ),
  phone: z
    .string()
    .regex(/^\d+$/, "Телефон должен содержать только цифры")
    .min(10, "Телефон должен содержать не менее 10 цифр")
    .max(10, "Телефон должен содержать не более 10 цифр"),

  gender: z
    .string()
    .refine(
      (gender) => ["male", "female", "other"].includes(gender),
      "Гендер должен быть 'male', 'female' или 'other'"
    ),
});

function ModalComponent({ onClose, onAdd, addContact, ToggleModal, modal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const ref = useRef(null);

  const onSubmit = async (data) => {
    await addContact(new FormData(ref.current));
  };

  const handleClickOutside = (event) => {
    console.log("Mouse clicked");
    if (ref.current && !ref.current.contains(event.target)) {
      ToggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (!modal) return null;

  return (
    <div className={s.modal}>
      <form onSubmit={handleSubmit(onSubmit)} ref={ref} className={s.form}>
        {/* ПЕРВАЯ СЕКЦИЯ */}

        <div className={s.first_section}>
          <img src="img 1.svg" alt="" />
          <div>
            <div className={s.add_image}>
              <p style={{ fontFamily: "Jua" }}>Add New Contact</p>

              <label className={s.add_button}>
                <input
                  name="image"
                  {...register("image")}
                  type="file"
                  style={{ display: "none" }}
                />
                <img src="plus-vector.svg" alt="" />
                {/* Костыль с кнопками? */}
                <p style={{ fontFamily: "Inter" }}>Add Image</p>
              </label>
              <ErrorMessage
                errors={errors}
                name="image"
                render={({ message }) => (
                  <p style={{ color: "red" }} className={s.error_message}>
                    {message}
                  </p>
                )}
              />
            </div>
          </div>
        </div>

        {/* ВТОРАЯ СЕКЦИЯ */}

        <div className={s.second_section}>
          <div className={s.form_inputs}>
            <label>About</label>
            <input {...register("about")} className={s.input} />
          </div>{" "}
          <ErrorMessage
            errors={errors}
            name="about"
            render={({ message }) => (
              <p style={{ color: "red" }} className={s.error_message}>
                {message}
              </p>
            )}
          />
          <div className={s.form_inputs}>
            <label>Name</label>
            <input {...register("name")} type="text" className={s.input} />
          </div>{" "}
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p style={{ color: "red" }} className={s.error_message}>
                {message}
              </p>
            )}
          />
          <div className={s.form_inputs}>
            <label>Surname</label>
            <input {...register("surname")} type="text" className={s.input} />
          </div>{" "}
          <ErrorMessage
            errors={errors}
            name="surname"
            render={({ message }) => (
              <p style={{ color: "red" }} className={s.error_message}>
                {message}
              </p>
            )}
          />
          <div className={s.form_inputs}>
            <label>Phone</label>
            <input {...register("phone")} className={s.input} />
          </div>{" "}
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ message }) => (
              <p style={{ color: "red" }} className={s.error_message}>
                {message}
              </p>
            )}
          />
          <div className={s.form_inputs}>
            <label>Email</label>
            <input {...register("mail")} className={s.input} />
          </div>{" "}
          <ErrorMessage
            errors={errors}
            name="mail"
            render={({ message }) => (
              <p style={{ color: "red" }} className={s.error_message}>
                {message}
              </p>
            )}
          />
        </div>
        {/* ТРЕТЬЯ СЕКЦИЯ */}

        <div className={s.third_section}>
          <select
            {...register("gender")}
            id="gender"
            className={s.genger__select}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <ErrorMessage
            errors={errors}
            name="gender"
            render={({ message }) => (
              <p style={{ color: "red" }} className={s.error_message}>
                {message}
              </p>
            )}
          />
          <button type="submit" className={s.add__contact}>
            {" "}
            <img src="plus-vector.svg" alt="" />
            <p>Add New Contact</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalComponent;
