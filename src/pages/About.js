import { View, Authenticator } from "@aws-amplify/ui-react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPeople } from "../graphql/queries";
// import { createNote as createNoteMutation } from "../graphql/mutations";
import awsExports from "../aws-exports";
import { useState, useEffect } from "react";
Amplify.configure(awsExports);

const About = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    async function listNoteItems() {
      const notes = await API.graphql(graphqlOperation(listPeople));
      console.log(30, notes.data.listPeople.items);
      setItem(notes.data.listPeople.items);
    }
    listNoteItems();
  }, []);

  //Login config
  const formFields = {
    signIn: {
      username: {
        dialCodeList: ["+66"],
      },
    },
    signUp: {
      email: {
        order: 1,
      },
      phone_number: {
        dialCodeList: ["+66"],
        order: 2,
      },
      password: {
        order: 3,
      },
      confirm_password: {
        order: 4,
      },
    },
  };

  //const todo = { name: "My first todo", description: "Hello world!" };
  //const detail = { FirstName: "My first todo", LastName: "Hello world!" };

  /* create a todo */
  //await API.graphql(graphqlOperation(createPerson, {input: detail}));

  /* update a todo */
  //await API.graphql(graphqlOperation(updatePerson, { input: { id: todoId, name: "Updated todo info" }}));

  /* delete a todo */
  //await API.graphql(graphqlOperation(deletePerson, { input: { id: todoId }}));
  // async function createNote() {
  //   const data = {
  //     name: "My first Name",
  //     description: "Hello world!",
  //     image: "",
  //   };

  //   //await API.graphql(graphqlOperation(createPerson, {input: detail}));

  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  // }

  /*var keys = Object.keys(myObject)
var getKeys = function(obj){
  var keys = [];
  for(var key in obj){
     keys.push(key);
  }
  return keys;
}*/

  //return <h1>About page</h1>
  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
        <View className="App">
          <h1>Hello {user.username}</h1>

          {items.map((item, index) => (
            <div key={index}>
              {item.id} - {item.owner} - {item.AssetValue}
            </div>
          ))}
        </View>
      )}
    </Authenticator>
  );
};
export default About;
