// S3 Storage pack : https://docs.amplify.aws/lib/storage/upload/q/platform/js/#event-handlers

import React, { useState, useEffect } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  API,
  Storage,
  //  Auth
} from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  //withAuthenticator,
  Authenticator,
} from "@aws-amplify/ui-react";
// import { listNotes } from "../graphql/queries";
import {
  //Need Fix
  createPerson as createNoteMutation,
  //OK
  //createLegacyManager  as createNoteMutation,
  //createAssetVehicles as createNoteMutation,
  //createAssetVehicles as createNoteMutation,
  //createAssetBankAccounts as createNoteMutation,
  //createAssetInstructions as createNoteMutation,
  //createAssetLand as createNoteMutation,
  //createAssetNFT as createNoteMutation,
  //createAssetBankAccounts as createNoteMutation,
  //createAssetLuxuryGoods as createNoteMutation,
  //createAssetArtWorks as createNoteMutation,
  //createAssetNFT as createNoteMutation,
  //createAssetGold as createNoteMutation,
  //createAssetCryptoCurrency as createNoteMutation,
  //createAssetLoanPromise as createNoteMutation,
  //createAssetStock as createNoteMutation,
  //createPet as createNoteMutation,
  //createAssetCashSaving as createNoteMutation,
  //createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
  updateNote as updateNoteMutation,
} from "../graphql/mutations";

const PremiumPage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    //refresh one time after sign in
    //var owner = window.localStorage.getItem('owner');
    //console.log(refresh);
    //if (owner===null){
    //window.location.reload();
    //window.localStorage.setItem('owner', user.username);
    //}
    // fetchNotes();
  }, []);

  // async function fetchNotes() {
  //   const AuthUser = await Auth.currentUserInfo();
  //   //const UserID = AuthUser.id; /* foldername in strorage */
  //   const UserSub = AuthUser.attributes["sub"];
  //   //const UserSub = tokens.getIdToken().payload['cognio:username'];
  //   let filter = {
  //     owner: {
  //         contains: UserSub //This is not required to filter manually. Just example
  //       }
  //     };
  //   //Note : each table have schema to allow ONLY owners data access their record
  //   const apiData = await API.graphql({ query: listNotes , variables: { filter: filter } });
  //   // const notesFromAPI = apiData.data.listNotes.items;
  //   // await Promise.all(
  //   //   notesFromAPI.map(async (note) => {
  //   //     if (note.image) {
  //   //       Storage.configure({ level: 'private' });
  //   //       const url = await Storage.get(note.image);
  //   //       note.imageURL = url;
  //   //     }
  //   //     //note.description = UserSub;
  //   //     //get user_identity_id
  //   //     //const credentials = await Auth.currentUserCredentials();
  //   //     return note;
  //   //   })
  //   // );
  //   // setNotes(notesFromAPI);
  // }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    // const image = form.get("image");

    //generate datetime prefix
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // var yyyy = today.getFullYear();
    // var curHour =
    //   today.getHours() > 12
    //     ? today.getHours() - 12
    //     : today.getHours() < 10
    //     ? "0" + today.getHours()
    //     : today.getHours();
    // var curMinute =
    //   today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    // var curSeconds =
    //   today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    // today = dd + mm + yyyy + curHour + curMinute + curSeconds;

    // const AuthUser = await Auth.currentUserInfo();
    // const UserSub = AuthUser.attributes["sub"];
    const data = {
      // name: form.get("name"),
      //description: form.get("description"),
      //image: today + form.get("description") + '.png',
      //ManagerType: 3,
      Title: form.get("name"),
      Fname: "สาม ",
      Lname: "มั่นใจ",
      Email: "myfriend@gmail.com",
      PhoneNumber: "0691234567",
      //Title: 'นาย',
      //FName: 'เอกชัย',
      //LName: 'ศรีวิชัย',
      //AccountValue: '100'
      //AssetValue: '100',
      //owner: UserSub,
      //PetName : 'ลัคกี้',
      //PetType : 'สุนัข',
    };
    /*if (!!data.image) {
        if (!!image) {
          Storage.configure({ level: 'private'});
          await Storage.put(data.image, image);
        }
    }*/
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    // fetchNotes();
    event.target.reset();
  }

  async function updateNote({ id, name }) {
    //async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: updateNoteMutation,
      variables: { input: { id, description: "Updated! by" + name } },
    });
    // fetchNotes();
  }

  async function deleteNote({ id, image }) {
    //async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    Storage.configure({ level: "private" });
    //await Storage.remove(name);
    await Storage.remove(image);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

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

  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
        <View className="App">
          <h1>Hello {user.username}</h1>
          <h1>{user.attributes.email}</h1>
          <h1>{user.attributes.phone_number}</h1>

          <Heading level={1}>My Notes App</Heading>
          <View as="form" margin="3rem 0" onSubmit={createNote}>
            <Flex direction="row" justifyContent="center">
              <TextField
                name="name"
                placeholder="Note Name"
                label="Note Name"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="description"
                placeholder="Note Description"
                label="Note Description"
                labelHidden
                variation="quiet"
                required
              />
              <View
                name="image"
                as="input"
                type="file"
                style={{ alignSelf: "end" }}
              />
              <Button type="submit" variation="primary">
                Create Note
              </Button>
            </Flex>
          </View>
          <Heading level={2}>Current Notes</Heading>
          <View margin="3rem 0">
            {notes.map((note) => (
              <Flex
                key={note.id || note.name}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Text as="strong" fontWeight={700}>
                  {note.name}
                </Text>
                <Text as="span">{note.description}</Text>
                {note.image && (
                  <Image
                    src={note.imageURL}
                    alt={`visual aid for ${notes.name}`}
                    style={{ width: 400 }}
                  />
                )}
                <Button variation="link" onClick={() => updateNote(note)}>
                  Update desc note
                </Button>
                <Button variation="link" onClick={() => deleteNote(note)}>
                  Delete note
                </Button>
              </Flex>
            ))}
          </View>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
      )}
    </Authenticator>
  );
};
export default PremiumPage;
//export default withAuthenticator(PremiumPage);
