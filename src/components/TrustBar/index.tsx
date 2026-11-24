import trustbarData from "./trustbarData";
import TrustBarCard from "./card";

import styles from './style.module.scss';

const TrustBar = () => {
  return (
    <section className={styles['trust-bar']}>
		<div className={styles['items-holder']}>
				{trustbarData.map((item, index) => (
					<TrustBarCard title={item.title} image={item.image} key={index} />
				))}
		</div>
    </section>
  );
};

export default TrustBar;
