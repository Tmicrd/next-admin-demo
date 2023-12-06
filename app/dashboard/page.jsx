import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/Rightbar/Rightbar";
import Transactions from "../ui/dashboard/Transactions/Transactions";
import Chart from "../ui/dashboard/Chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
