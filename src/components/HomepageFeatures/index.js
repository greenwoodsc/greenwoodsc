import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CatList = [
  {
    title: '',
    Svg: require('@site/static/img/sc.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  //{
  //  title: 'Places',
  //  Svg: require('@site/static/img/sc.svg').default,
  //  description: (
  //    <>
  //      
  //    </>
  //  ),
  //},
  //{
  //  title: 'Things',
  //  Svg: require('@site/static/img/sc.svg').default,
  //  description: (
  //    <>
  //      
  //    </>
  //  ),
  //},
  //{
  //  title: 'History',
  //  Svg: require('@site/static/img/sc.svg').default,
  //  description: (
  //    <>
  //      
  //    </>
  //  ),
  //},
  //{
  //  title: 'Government',
  //  Svg: require('@site/static/img/sc.svg').default,
  //  description: (
  //    <>
  //      
  //    </>
  //  ),
  //},
  //{
  //  title: 'Climate',
  //  Svg: require('@site/static/img/sc.svg').default,
  //  description: (
  //    <>
  //      
  //    </>
  //  ),
  //},
];

function Cat({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCats() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CatList.map((props, idx) => (
            <Cat key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
