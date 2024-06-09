import styles from './menuItem.module.scss';

const menuItem = () => { 

  return (
      <>
           <img  src={item.icon} alt={item.title} />
            <div>{ item.title}</div>
      </>
  )
}


export default menuItem;