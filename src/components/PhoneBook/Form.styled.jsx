import styled from "styled-components";

export const FormOfContacts = styled.form`
display: flex;
flex-direction: column;
max-width: 500px;
margin: 0 auto;

label{
    
  display: block;
  font-size: 18px;
  color: #666;
  padding: 10px 0;
  cursor: pointer;
  
  /* &:first-child
    margin-bottom: 0
    border-bottom: none */
}


input{
    padding: 10px 20px;
  border: 1px solid #999;
  border-radius: 3px;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  outline: none;
  
  /* &:focus:
    border-color: #FF6F00 */
}

button {
    max-width: 200px;
    margin: 0 auto;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #FF6F00;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  cursor: pointer;
  
  /* &:hover
    background: darken(#FF6F00, 5%);
    border: 1px solid rgba(255,255,255,0.6);
    box-shadow: 0px 10px 15px -6px rgba(88, 85, 85, 0.2); */

  

   
}`