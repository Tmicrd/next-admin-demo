import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Myra Wilkerson
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Myra Wilkerson" />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="MyraWilkerson@gamil.com"
          />
          <label>Password</label>
          <input type="password" name="password" k />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+1234567" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Sydney" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}></option>
            <option value={false}></option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}></option>
            <option value={false}></option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
