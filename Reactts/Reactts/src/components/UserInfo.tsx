

const UserInfo = (props: {name: string; city: string; age: number; gender: string}) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.city}</h1>
      <h1>{props.age}</h1>
      <h1>{props.gender}</h1>  
    </div>
  )
}

export default UserInfo
