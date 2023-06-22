import styles from './UsersList.module.css'
import Card from './Card';

const UsersList=(props)=>{
  return (
    <Card className={styles.users}>
        <ul>
          {props.users.map((user)=>{
            return  <li key={user.id}>{user.Name} {user.Age} years old</li>
          })}
        </ul>
    </Card>
  )
}

export default UsersList;