


export const ContactList =({contacts,onDeleteContact}) =>{
return(
    <ul>
        {contacts.map(({id,name,number}) =>{
            return(
            <li key={id}><p>{name}:{number}</p>
            <button type="button" onClick={()=> onDeleteContact(id)}>delete</button></li>)
        })}
    </ul>
)
}
