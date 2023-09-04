import ActivitiesItem from "../ActivitiesItem/ActivitiesItem"
import '../Activities/activities.css'
import ActivitiesConstruction from '../../img/ActivitiesConstruction.svg'

const Activities = () => {
  const items = [
    {
      title: <h3 className="title-activities">Show activities</h3>,
      content: <img className="ActivitiesConstruction" src={ActivitiesConstruction} alt="" />,
    },
  ];

  return (
    <section className="Activities">
      {items.map((item, index) => (
        <ActivitiesItem key={index} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default Activities;