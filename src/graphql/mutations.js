/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateHomeCookies = /* GraphQL */ `
  mutation UpdateHomeCookies(
    $input: UpdateHomeCookiesInput!
    $condition: ModelHomeCookiesConditionInput
  ) {
    updateHomeCookies(input: $input, condition: $condition) {
      id
      UID
      CookieAccept
      isMobile
      deviceType
      mobileVendor
      mobileModel
      osName
      osVersion
      browserName
      fullBrowserVersion
      createdAt
      updatedAt
    }
  }
`;
export const deleteHomeCookies = /* GraphQL */ `
  mutation DeleteHomeCookies(
    $input: DeleteHomeCookiesInput!
    $condition: ModelHomeCookiesConditionInput
  ) {
    deleteHomeCookies(input: $input, condition: $condition) {
      id
      UID
      CookieAccept
      isMobile
      deviceType
      mobileVendor
      mobileModel
      osName
      osVersion
      browserName
      fullBrowserVersion
      createdAt
      updatedAt
    }
  }
`;
export const createDashboard = /* GraphQL */ `
  mutation CreateDashboard(
    $input: CreateDashboardInput!
    $condition: ModelDashboardConditionInput
  ) {
    createDashboard(input: $input, condition: $condition) {
      id
      owner
      Email
      Personal
      PersonalLastDate
      Assets
      AssetsLastDate
      Pet
      PetLastDate
      Funeral
      FuneralLastDate
      WillManagement
      WillManageLastDate
      WillManager
      WillManagerLastDate
      PDFQuota
      PDFLastDate
      WillFile
      ReceiversLastDate
      LastMessageDate
      PersonalDocs
      AssetDocs
      ReceiverDocs
      WillManagerDocs
      WitnessDocs
      InsuranceDocs
      PetDocs
      OtherDocs
      Insurance
      createdAt
      updatedAt
    }
  }
`;
export const updateDashboard = /* GraphQL */ `
  mutation UpdateDashboard(
    $input: UpdateDashboardInput!
    $condition: ModelDashboardConditionInput
  ) {
    updateDashboard(input: $input, condition: $condition) {
      id
      owner
      Email
      Personal
      PersonalLastDate
      Assets
      AssetsLastDate
      Pet
      PetLastDate
      Funeral
      FuneralLastDate
      WillManagement
      WillManageLastDate
      WillManager
      WillManagerLastDate
      PDFQuota
      PDFLastDate
      WillFile
      ReceiversLastDate
      LastMessageDate
      PersonalDocs
      AssetDocs
      ReceiverDocs
      WillManagerDocs
      WitnessDocs
      InsuranceDocs
      PetDocs
      OtherDocs
      Insurance
      createdAt
      updatedAt
    }
  }
`;
export const deleteDashboard = /* GraphQL */ `
  mutation DeleteDashboard(
    $input: DeleteDashboardInput!
    $condition: ModelDashboardConditionInput
  ) {
    deleteDashboard(input: $input, condition: $condition) {
      id
      owner
      Email
      Personal
      PersonalLastDate
      Assets
      AssetsLastDate
      Pet
      PetLastDate
      Funeral
      FuneralLastDate
      WillManagement
      WillManageLastDate
      WillManager
      WillManagerLastDate
      PDFQuota
      PDFLastDate
      WillFile
      ReceiversLastDate
      LastMessageDate
      PersonalDocs
      AssetDocs
      ReceiverDocs
      WillManagerDocs
      WitnessDocs
      InsuranceDocs
      PetDocs
      OtherDocs
      Insurance
      createdAt
      updatedAt
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      owner
      Title
      Fname
      Lname
      CitizenID
      BirthDate
      Sex
      Email
      PhoneCode
      PhoneNumber
      Address1
      Address2
      Address3
      Address4
      PostCode
      AssetClass
      MaritalStatus
      HasChild
      MarTitle
      MarFname
      MarLname
      MarBirthDate
      MarSex
      MarEmail
      MarPhoneCode
      MarPhoneNumber
      MarAddress1
      MarAddress2
      MarAddress3
      MarAddress4
      MarPostCode
      MarAccountActive
      createdAt
      updatedAt
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      owner
      Title
      Fname
      Lname
      CitizenID
      BirthDate
      Sex
      Email
      PhoneCode
      PhoneNumber
      Address1
      Address2
      Address3
      Address4
      PostCode
      AssetClass
      MaritalStatus
      HasChild
      MarTitle
      MarFname
      MarLname
      MarBirthDate
      MarSex
      MarEmail
      MarPhoneCode
      MarPhoneNumber
      MarAddress1
      MarAddress2
      MarAddress3
      MarAddress4
      MarPostCode
      MarAccountActive
      createdAt
      updatedAt
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      owner
      Title
      Fname
      Lname
      CitizenID
      BirthDate
      Sex
      Email
      PhoneCode
      PhoneNumber
      Address1
      Address2
      Address3
      Address4
      PostCode
      AssetClass
      MaritalStatus
      HasChild
      MarTitle
      MarFname
      MarLname
      MarBirthDate
      MarSex
      MarEmail
      MarPhoneCode
      MarPhoneNumber
      MarAddress1
      MarAddress2
      MarAddress3
      MarAddress4
      MarPostCode
      MarAccountActive
      createdAt
      updatedAt
    }
  }
`;
export const createOrderInfo = /* GraphQL */ `
  mutation CreateOrderInfo(
    $input: CreateOrderInfoInput!
    $condition: ModelOrderInfoConditionInput
  ) {
    createOrderInfo(input: $input, condition: $condition) {
      id
      owner
      OrderType
      Topic
      Text
      Note
      AttachedFile
      SendType
      SendDate
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderInfo = /* GraphQL */ `
  mutation UpdateOrderInfo(
    $input: UpdateOrderInfoInput!
    $condition: ModelOrderInfoConditionInput
  ) {
    updateOrderInfo(input: $input, condition: $condition) {
      id
      owner
      OrderType
      Topic
      Text
      Note
      AttachedFile
      SendType
      SendDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderInfo = /* GraphQL */ `
  mutation DeleteOrderInfo(
    $input: DeleteOrderInfoInput!
    $condition: ModelOrderInfoConditionInput
  ) {
    deleteOrderInfo(input: $input, condition: $condition) {
      id
      owner
      OrderType
      Topic
      Text
      Note
      AttachedFile
      SendType
      SendDate
      createdAt
      updatedAt
    }
  }
`;
export const createDocsDashboard = /* GraphQL */ `
  mutation CreateDocsDashboard(
    $input: CreateDocsDashboardInput!
    $condition: ModelDocsDashboardConditionInput
  ) {
    createDocsDashboard(input: $input, condition: $condition) {
      id
      owner
      PersonalDocs
      AssetDocs
      ReceiverDocs
      WealtManagerDocs
      ProvisionDocs
      InsuranceDocs
      PetDocs
      OtherDocs
      createdAt
      updatedAt
    }
  }
`;
export const updateDocsDashboard = /* GraphQL */ `
  mutation UpdateDocsDashboard(
    $input: UpdateDocsDashboardInput!
    $condition: ModelDocsDashboardConditionInput
  ) {
    updateDocsDashboard(input: $input, condition: $condition) {
      id
      owner
      PersonalDocs
      AssetDocs
      ReceiverDocs
      WealtManagerDocs
      ProvisionDocs
      InsuranceDocs
      PetDocs
      OtherDocs
      createdAt
      updatedAt
    }
  }
`;
export const deleteDocsDashboard = /* GraphQL */ `
  mutation DeleteDocsDashboard(
    $input: DeleteDocsDashboardInput!
    $condition: ModelDocsDashboardConditionInput
  ) {
    deleteDocsDashboard(input: $input, condition: $condition) {
      id
      owner
      PersonalDocs
      AssetDocs
      ReceiverDocs
      WealtManagerDocs
      ProvisionDocs
      InsuranceDocs
      PetDocs
      OtherDocs
      createdAt
      updatedAt
    }
  }
`;
export const createPersonalDocs = /* GraphQL */ `
  mutation CreatePersonalDocs(
    $input: CreatePersonalDocsInput!
    $condition: ModelPersonalDocsConditionInput
  ) {
    createPersonalDocs(input: $input, condition: $condition) {
      id
      owner
      CitizenCard
      CensusReg
      NameChange
      MarriageCert
      DivorceCert
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonalDocs = /* GraphQL */ `
  mutation UpdatePersonalDocs(
    $input: UpdatePersonalDocsInput!
    $condition: ModelPersonalDocsConditionInput
  ) {
    updatePersonalDocs(input: $input, condition: $condition) {
      id
      owner
      CitizenCard
      CensusReg
      NameChange
      MarriageCert
      DivorceCert
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonalDocs = /* GraphQL */ `
  mutation DeletePersonalDocs(
    $input: DeletePersonalDocsInput!
    $condition: ModelPersonalDocsConditionInput
  ) {
    deletePersonalDocs(input: $input, condition: $condition) {
      id
      owner
      CitizenCard
      CensusReg
      NameChange
      MarriageCert
      DivorceCert
      createdAt
      updatedAt
    }
  }
`;
export const createWitnessDocs = /* GraphQL */ `
  mutation CreateWitnessDocs(
    $input: CreateWitnessDocsInput!
    $condition: ModelWitnessDocsConditionInput
  ) {
    createWitnessDocs(input: $input, condition: $condition) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const updateWitnessDocs = /* GraphQL */ `
  mutation UpdateWitnessDocs(
    $input: UpdateWitnessDocsInput!
    $condition: ModelWitnessDocsConditionInput
  ) {
    updateWitnessDocs(input: $input, condition: $condition) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const deleteWitnessDocs = /* GraphQL */ `
  mutation DeleteWitnessDocs(
    $input: DeleteWitnessDocsInput!
    $condition: ModelWitnessDocsConditionInput
  ) {
    deleteWitnessDocs(input: $input, condition: $condition) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const createAssetDocs = /* GraphQL */ `
  mutation CreateAssetDocs(
    $input: CreateAssetDocsInput!
    $condition: ModelAssetDocsConditionInput
  ) {
    createAssetDocs(input: $input, condition: $condition) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetDocs = /* GraphQL */ `
  mutation UpdateAssetDocs(
    $input: UpdateAssetDocsInput!
    $condition: ModelAssetDocsConditionInput
  ) {
    updateAssetDocs(input: $input, condition: $condition) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetDocs = /* GraphQL */ `
  mutation DeleteAssetDocs(
    $input: DeleteAssetDocsInput!
    $condition: ModelAssetDocsConditionInput
  ) {
    deleteAssetDocs(input: $input, condition: $condition) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const createInsuranceDocs = /* GraphQL */ `
  mutation CreateInsuranceDocs(
    $input: CreateInsuranceDocsInput!
    $condition: ModelInsuranceDocsConditionInput
  ) {
    createInsuranceDocs(input: $input, condition: $condition) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const updateInsuranceDocs = /* GraphQL */ `
  mutation UpdateInsuranceDocs(
    $input: UpdateInsuranceDocsInput!
    $condition: ModelInsuranceDocsConditionInput
  ) {
    updateInsuranceDocs(input: $input, condition: $condition) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const deleteInsuranceDocs = /* GraphQL */ `
  mutation DeleteInsuranceDocs(
    $input: DeleteInsuranceDocsInput!
    $condition: ModelInsuranceDocsConditionInput
  ) {
    deleteInsuranceDocs(input: $input, condition: $condition) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const createReceiverDocs = /* GraphQL */ `
  mutation CreateReceiverDocs(
    $input: CreateReceiverDocsInput!
    $condition: ModelReceiverDocsConditionInput
  ) {
    createReceiverDocs(input: $input, condition: $condition) {
      id
      owner
      BornRegDoc
      ChildCitizenCard
      MarriedRegDoc
      MarriedCitizenCard
      GenralCitizenCard
      OwnerContractDoc
      createdAt
      updatedAt
    }
  }
`;
export const updateReceiverDocs = /* GraphQL */ `
  mutation UpdateReceiverDocs(
    $input: UpdateReceiverDocsInput!
    $condition: ModelReceiverDocsConditionInput
  ) {
    updateReceiverDocs(input: $input, condition: $condition) {
      id
      owner
      BornRegDoc
      ChildCitizenCard
      MarriedRegDoc
      MarriedCitizenCard
      GenralCitizenCard
      OwnerContractDoc
      createdAt
      updatedAt
    }
  }
`;
export const deleteReceiverDocs = /* GraphQL */ `
  mutation DeleteReceiverDocs(
    $input: DeleteReceiverDocsInput!
    $condition: ModelReceiverDocsConditionInput
  ) {
    deleteReceiverDocs(input: $input, condition: $condition) {
      id
      owner
      BornRegDoc
      ChildCitizenCard
      MarriedRegDoc
      MarriedCitizenCard
      GenralCitizenCard
      OwnerContractDoc
      createdAt
      updatedAt
    }
  }
`;
export const createPetDocs = /* GraphQL */ `
  mutation CreatePetDocs(
    $input: CreatePetDocsInput!
    $condition: ModelPetDocsConditionInput
  ) {
    createPetDocs(input: $input, condition: $condition) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const updatePetDocs = /* GraphQL */ `
  mutation UpdatePetDocs(
    $input: UpdatePetDocsInput!
    $condition: ModelPetDocsConditionInput
  ) {
    updatePetDocs(input: $input, condition: $condition) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const deletePetDocs = /* GraphQL */ `
  mutation DeletePetDocs(
    $input: DeletePetDocsInput!
    $condition: ModelPetDocsConditionInput
  ) {
    deletePetDocs(input: $input, condition: $condition) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const createWealtManagerDocs = /* GraphQL */ `
  mutation CreateWealtManagerDocs(
    $input: CreateWealtManagerDocsInput!
    $condition: ModelWealtManagerDocsConditionInput
  ) {
    createWealtManagerDocs(input: $input, condition: $condition) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const updateWealtManagerDocs = /* GraphQL */ `
  mutation UpdateWealtManagerDocs(
    $input: UpdateWealtManagerDocsInput!
    $condition: ModelWealtManagerDocsConditionInput
  ) {
    updateWealtManagerDocs(input: $input, condition: $condition) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const deleteWealtManagerDocs = /* GraphQL */ `
  mutation DeleteWealtManagerDocs(
    $input: DeleteWealtManagerDocsInput!
    $condition: ModelWealtManagerDocsConditionInput
  ) {
    deleteWealtManagerDocs(input: $input, condition: $condition) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const createOtherDocs = /* GraphQL */ `
  mutation CreateOtherDocs(
    $input: CreateOtherDocsInput!
    $condition: ModelOtherDocsConditionInput
  ) {
    createOtherDocs(input: $input, condition: $condition) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const updateOtherDocs = /* GraphQL */ `
  mutation UpdateOtherDocs(
    $input: UpdateOtherDocsInput!
    $condition: ModelOtherDocsConditionInput
  ) {
    updateOtherDocs(input: $input, condition: $condition) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const deleteOtherDocs = /* GraphQL */ `
  mutation DeleteOtherDocs(
    $input: DeleteOtherDocsInput!
    $condition: ModelOtherDocsConditionInput
  ) {
    deleteOtherDocs(input: $input, condition: $condition) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const createInsuranceInfo = /* GraphQL */ `
  mutation CreateInsuranceInfo(
    $input: CreateInsuranceInfoInput!
    $condition: ModelInsuranceInfoConditionInput
  ) {
    createInsuranceInfo(input: $input, condition: $condition) {
      id
      owner
      InsuranceType
      InsuranceFirm
      InsuranceID
      AgentName
      MoreInfo
      createdAt
      updatedAt
    }
  }
`;
export const updateInsuranceInfo = /* GraphQL */ `
  mutation UpdateInsuranceInfo(
    $input: UpdateInsuranceInfoInput!
    $condition: ModelInsuranceInfoConditionInput
  ) {
    updateInsuranceInfo(input: $input, condition: $condition) {
      id
      owner
      InsuranceType
      InsuranceFirm
      InsuranceID
      AgentName
      MoreInfo
      createdAt
      updatedAt
    }
  }
`;
export const deleteInsuranceInfo = /* GraphQL */ `
  mutation DeleteInsuranceInfo(
    $input: DeleteInsuranceInfoInput!
    $condition: ModelInsuranceInfoConditionInput
  ) {
    deleteInsuranceInfo(input: $input, condition: $condition) {
      id
      owner
      InsuranceType
      InsuranceFirm
      InsuranceID
      AgentName
      MoreInfo
      createdAt
      updatedAt
    }
  }
`;
export const createAssetInstructions = /* GraphQL */ `
  mutation CreateAssetInstructions(
    $input: CreateAssetInstructionsInput!
    $condition: ModelAssetInstructionsConditionInput
  ) {
    createAssetInstructions(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      OwnerType
      BankName
      TitleDeedNumber
      Rai
      Ngan
      SquareSize
      SquareUnit
      AssetDetail
      AssetValue
      GGLatitude
      GGLongtitude
      Address
      Province
      SubProvince
      Tumbol
      PostCode
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetInstructions = /* GraphQL */ `
  mutation UpdateAssetInstructions(
    $input: UpdateAssetInstructionsInput!
    $condition: ModelAssetInstructionsConditionInput
  ) {
    updateAssetInstructions(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      OwnerType
      BankName
      TitleDeedNumber
      Rai
      Ngan
      SquareSize
      SquareUnit
      AssetDetail
      AssetValue
      GGLatitude
      GGLongtitude
      Address
      Province
      SubProvince
      Tumbol
      PostCode
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetInstructions = /* GraphQL */ `
  mutation DeleteAssetInstructions(
    $input: DeleteAssetInstructionsInput!
    $condition: ModelAssetInstructionsConditionInput
  ) {
    deleteAssetInstructions(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      OwnerType
      BankName
      TitleDeedNumber
      Rai
      Ngan
      SquareSize
      SquareUnit
      AssetDetail
      AssetValue
      GGLatitude
      GGLongtitude
      Address
      Province
      SubProvince
      Tumbol
      PostCode
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const createAssetLand = /* GraphQL */ `
  mutation CreateAssetLand(
    $input: CreateAssetLandInput!
    $condition: ModelAssetLandConditionInput
  ) {
    createAssetLand(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      OwnerType
      BankName
      TitleDeedNumber
      Rai
      Ngan
      SquareSize
      SquareUnit
      AssetDetail
      AssetValue
      GGLatitude
      GGLongtitude
      Address
      Province
      SubProvince
      Tumbol
      PostCode
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetLand = /* GraphQL */ `
  mutation UpdateAssetLand(
    $input: UpdateAssetLandInput!
    $condition: ModelAssetLandConditionInput
  ) {
    updateAssetLand(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      OwnerType
      BankName
      TitleDeedNumber
      Rai
      Ngan
      SquareSize
      SquareUnit
      AssetDetail
      AssetValue
      GGLatitude
      GGLongtitude
      Address
      Province
      SubProvince
      Tumbol
      PostCode
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetLand = /* GraphQL */ `
  mutation DeleteAssetLand(
    $input: DeleteAssetLandInput!
    $condition: ModelAssetLandConditionInput
  ) {
    deleteAssetLand(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      OwnerType
      BankName
      TitleDeedNumber
      Rai
      Ngan
      SquareSize
      SquareUnit
      AssetDetail
      AssetValue
      GGLatitude
      GGLongtitude
      Address
      Province
      SubProvince
      Tumbol
      PostCode
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const createAssetVehicles = /* GraphQL */ `
  mutation CreateAssetVehicles(
    $input: CreateAssetVehiclesInput!
    $condition: ModelAssetVehiclesConditionInput
  ) {
    createAssetVehicles(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetCategory
      OwnerType
      BankName
      Brand
      ModelYear
      Model
      ProvinceReg
      VehicleNumber
      Detail
      AssetValue
      AssetAddress
      AdssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetVehicles = /* GraphQL */ `
  mutation UpdateAssetVehicles(
    $input: UpdateAssetVehiclesInput!
    $condition: ModelAssetVehiclesConditionInput
  ) {
    updateAssetVehicles(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetCategory
      OwnerType
      BankName
      Brand
      ModelYear
      Model
      ProvinceReg
      VehicleNumber
      Detail
      AssetValue
      AssetAddress
      AdssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetVehicles = /* GraphQL */ `
  mutation DeleteAssetVehicles(
    $input: DeleteAssetVehiclesInput!
    $condition: ModelAssetVehiclesConditionInput
  ) {
    deleteAssetVehicles(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetCategory
      OwnerType
      BankName
      Brand
      ModelYear
      Model
      ProvinceReg
      VehicleNumber
      Detail
      AssetValue
      AssetAddress
      AdssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const createAssetBankAccounts = /* GraphQL */ `
  mutation CreateAssetBankAccounts(
    $input: CreateAssetBankAccountsInput!
    $condition: ModelAssetBankAccountsConditionInput
  ) {
    createAssetBankAccounts(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AccountName
      AccountNumber
      BankName
      BankBranchs
      AccountType
      AssetValue
      Detail
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetBankAccounts = /* GraphQL */ `
  mutation UpdateAssetBankAccounts(
    $input: UpdateAssetBankAccountsInput!
    $condition: ModelAssetBankAccountsConditionInput
  ) {
    updateAssetBankAccounts(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AccountName
      AccountNumber
      BankName
      BankBranchs
      AccountType
      AssetValue
      Detail
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetBankAccounts = /* GraphQL */ `
  mutation DeleteAssetBankAccounts(
    $input: DeleteAssetBankAccountsInput!
    $condition: ModelAssetBankAccountsConditionInput
  ) {
    deleteAssetBankAccounts(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AccountName
      AccountNumber
      BankName
      BankBranchs
      AccountType
      AssetValue
      Detail
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createAssetLuxuryGoods = /* GraphQL */ `
  mutation CreateAssetLuxuryGoods(
    $input: CreateAssetLuxuryGoodsInput!
    $condition: ModelAssetLuxuryGoodsConditionInput
  ) {
    createAssetLuxuryGoods(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetCategory
      BrandName
      Model
      GoodsNumber
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetLuxuryGoods = /* GraphQL */ `
  mutation UpdateAssetLuxuryGoods(
    $input: UpdateAssetLuxuryGoodsInput!
    $condition: ModelAssetLuxuryGoodsConditionInput
  ) {
    updateAssetLuxuryGoods(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetCategory
      BrandName
      Model
      GoodsNumber
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetLuxuryGoods = /* GraphQL */ `
  mutation DeleteAssetLuxuryGoods(
    $input: DeleteAssetLuxuryGoodsInput!
    $condition: ModelAssetLuxuryGoodsConditionInput
  ) {
    deleteAssetLuxuryGoods(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetCategory
      BrandName
      Model
      GoodsNumber
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const createAssetArtWorks = /* GraphQL */ `
  mutation CreateAssetArtWorks(
    $input: CreateAssetArtWorksInput!
    $condition: ModelAssetArtWorksConditionInput
  ) {
    createAssetArtWorks(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      Artist
      GoodsNumber
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetArtWorks = /* GraphQL */ `
  mutation UpdateAssetArtWorks(
    $input: UpdateAssetArtWorksInput!
    $condition: ModelAssetArtWorksConditionInput
  ) {
    updateAssetArtWorks(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      Artist
      GoodsNumber
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetArtWorks = /* GraphQL */ `
  mutation DeleteAssetArtWorks(
    $input: DeleteAssetArtWorksInput!
    $condition: ModelAssetArtWorksConditionInput
  ) {
    deleteAssetArtWorks(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      Artist
      GoodsNumber
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const createAssetNFT = /* GraphQL */ `
  mutation CreateAssetNFT(
    $input: CreateAssetNFTInput!
    $condition: ModelAssetNFTConditionInput
  ) {
    createAssetNFT(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      URL
      Blockchain
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetNFT = /* GraphQL */ `
  mutation UpdateAssetNFT(
    $input: UpdateAssetNFTInput!
    $condition: ModelAssetNFTConditionInput
  ) {
    updateAssetNFT(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      URL
      Blockchain
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetNFT = /* GraphQL */ `
  mutation DeleteAssetNFT(
    $input: DeleteAssetNFTInput!
    $condition: ModelAssetNFTConditionInput
  ) {
    deleteAssetNFT(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      URL
      Blockchain
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      image5
      image6
      createdAt
      updatedAt
    }
  }
`;
export const createAssetGold = /* GraphQL */ `
  mutation CreateAssetGold(
    $input: CreateAssetGoldInput!
    $condition: ModelAssetGoldConditionInput
  ) {
    createAssetGold(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      Weight
      WeightUnit
      MarketPrice
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetGold = /* GraphQL */ `
  mutation UpdateAssetGold(
    $input: UpdateAssetGoldInput!
    $condition: ModelAssetGoldConditionInput
  ) {
    updateAssetGold(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      Weight
      WeightUnit
      MarketPrice
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetGold = /* GraphQL */ `
  mutation DeleteAssetGold(
    $input: DeleteAssetGoldInput!
    $condition: ModelAssetGoldConditionInput
  ) {
    deleteAssetGold(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      Weight
      WeightUnit
      MarketPrice
      AssetValue
      AssetAddress
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createAssetCryptoCurrency = /* GraphQL */ `
  mutation CreateAssetCryptoCurrency(
    $input: CreateAssetCryptoCurrencyInput!
    $condition: ModelAssetCryptoCurrencyConditionInput
  ) {
    createAssetCryptoCurrency(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      Currency
      ExchangeWallet
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetCryptoCurrency = /* GraphQL */ `
  mutation UpdateAssetCryptoCurrency(
    $input: UpdateAssetCryptoCurrencyInput!
    $condition: ModelAssetCryptoCurrencyConditionInput
  ) {
    updateAssetCryptoCurrency(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      Currency
      ExchangeWallet
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetCryptoCurrency = /* GraphQL */ `
  mutation DeleteAssetCryptoCurrency(
    $input: DeleteAssetCryptoCurrencyInput!
    $condition: ModelAssetCryptoCurrencyConditionInput
  ) {
    deleteAssetCryptoCurrency(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      Currency
      ExchangeWallet
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createAssetStock = /* GraphQL */ `
  mutation CreateAssetStock(
    $input: CreateAssetStockInput!
    $condition: ModelAssetStockConditionInput
  ) {
    createAssetStock(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      StockUnit
      StockPrice
      PurchaseDate
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetStock = /* GraphQL */ `
  mutation UpdateAssetStock(
    $input: UpdateAssetStockInput!
    $condition: ModelAssetStockConditionInput
  ) {
    updateAssetStock(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      StockUnit
      StockPrice
      PurchaseDate
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetStock = /* GraphQL */ `
  mutation DeleteAssetStock(
    $input: DeleteAssetStockInput!
    $condition: ModelAssetStockConditionInput
  ) {
    deleteAssetStock(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      StockUnit
      StockPrice
      PurchaseDate
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createAssetLoanPromise = /* GraphQL */ `
  mutation CreateAssetLoanPromise(
    $input: CreateAssetLoanPromiseInput!
    $condition: ModelAssetLoanPromiseConditionInput
  ) {
    createAssetLoanPromise(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      AssetValue
      YieldPercentage
      YieldType
      PromiseStartDate
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetLoanPromise = /* GraphQL */ `
  mutation UpdateAssetLoanPromise(
    $input: UpdateAssetLoanPromiseInput!
    $condition: ModelAssetLoanPromiseConditionInput
  ) {
    updateAssetLoanPromise(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      AssetValue
      YieldPercentage
      YieldType
      PromiseStartDate
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetLoanPromise = /* GraphQL */ `
  mutation DeleteAssetLoanPromise(
    $input: DeleteAssetLoanPromiseInput!
    $condition: ModelAssetLoanPromiseConditionInput
  ) {
    deleteAssetLoanPromise(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetCategory
      AssetValue
      YieldPercentage
      YieldType
      PromiseStartDate
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createAssetCashSaving = /* GraphQL */ `
  mutation CreateAssetCashSaving(
    $input: CreateAssetCashSavingInput!
    $condition: ModelAssetCashSavingConditionInput
  ) {
    createAssetCashSaving(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateAssetCashSaving = /* GraphQL */ `
  mutation UpdateAssetCashSaving(
    $input: UpdateAssetCashSavingInput!
    $condition: ModelAssetCashSavingConditionInput
  ) {
    updateAssetCashSaving(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssetCashSaving = /* GraphQL */ `
  mutation DeleteAssetCashSaving(
    $input: DeleteAssetCashSavingInput!
    $condition: ModelAssetCashSavingConditionInput
  ) {
    deleteAssetCashSaving(input: $input, condition: $condition) {
      id
      owner
      MarriageFlag
      AssetName
      AssetValue
      AssetComment
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
      id
      owner
      Active
      ReceiverID
      PetName
      PetType
      PetSpecies
      PetFavoriteFeed
      PetMedicalCondition
      PetLastMessage
      PetCharacter
      PetDoctor
      Budget
      BudgetSource
      PetWhenToSendType
      PetSendSchedule
      PetImage1
      PetImage2
      PetImage3
      PetImage4
      PetImage5
      PetImage6
      PetImage7
      PetImage8
      PetImage9
      PetImage10
      createdAt
      updatedAt
    }
  }
`;
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
      id
      owner
      Active
      ReceiverID
      PetName
      PetType
      PetSpecies
      PetFavoriteFeed
      PetMedicalCondition
      PetLastMessage
      PetCharacter
      PetDoctor
      Budget
      BudgetSource
      PetWhenToSendType
      PetSendSchedule
      PetImage1
      PetImage2
      PetImage3
      PetImage4
      PetImage5
      PetImage6
      PetImage7
      PetImage8
      PetImage9
      PetImage10
      createdAt
      updatedAt
    }
  }
`;
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
      id
      owner
      Active
      ReceiverID
      PetName
      PetType
      PetSpecies
      PetFavoriteFeed
      PetMedicalCondition
      PetLastMessage
      PetCharacter
      PetDoctor
      Budget
      BudgetSource
      PetWhenToSendType
      PetSendSchedule
      PetImage1
      PetImage2
      PetImage3
      PetImage4
      PetImage5
      PetImage6
      PetImage7
      PetImage8
      PetImage9
      PetImage10
      createdAt
      updatedAt
    }
  }
`;
export const createFuneral = /* GraphQL */ `
  mutation CreateFuneral(
    $input: CreateFuneralInput!
    $condition: ModelFuneralConditionInput
  ) {
    createFuneral(input: $input, condition: $condition) {
      id
      owner
      ManagerID1
      ManagerID2
      ManagerID3
      ManagerID4
      ManagerID5
      Religion
      FuneralPlace
      Duration
      PartyFood
      Flower
      FuneralCulture
      FuneralProcessType
      WhereToKeep
      MoreDetail
      Budget
      BudgetSource
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const updateFuneral = /* GraphQL */ `
  mutation UpdateFuneral(
    $input: UpdateFuneralInput!
    $condition: ModelFuneralConditionInput
  ) {
    updateFuneral(input: $input, condition: $condition) {
      id
      owner
      ManagerID1
      ManagerID2
      ManagerID3
      ManagerID4
      ManagerID5
      Religion
      FuneralPlace
      Duration
      PartyFood
      Flower
      FuneralCulture
      FuneralProcessType
      WhereToKeep
      MoreDetail
      Budget
      BudgetSource
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const deleteFuneral = /* GraphQL */ `
  mutation DeleteFuneral(
    $input: DeleteFuneralInput!
    $condition: ModelFuneralConditionInput
  ) {
    deleteFuneral(input: $input, condition: $condition) {
      id
      owner
      ManagerID1
      ManagerID2
      ManagerID3
      ManagerID4
      ManagerID5
      Religion
      FuneralPlace
      Duration
      PartyFood
      Flower
      FuneralCulture
      FuneralProcessType
      WhereToKeep
      MoreDetail
      Budget
      BudgetSource
      image1
      image2
      image3
      image4
      createdAt
      updatedAt
    }
  }
`;
export const createAssignLegacy = /* GraphQL */ `
  mutation CreateAssignLegacy(
    $input: CreateAssignLegacyInput!
    $condition: ModelAssignLegacyConditionInput
  ) {
    createAssignLegacy(input: $input, condition: $condition) {
      id
      owner
      Assetid
      Receiverid
      Sequence
      Percentage
      createdAt
      updatedAt
    }
  }
`;
export const updateAssignLegacy = /* GraphQL */ `
  mutation UpdateAssignLegacy(
    $input: UpdateAssignLegacyInput!
    $condition: ModelAssignLegacyConditionInput
  ) {
    updateAssignLegacy(input: $input, condition: $condition) {
      id
      owner
      Assetid
      Receiverid
      Sequence
      Percentage
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssignLegacy = /* GraphQL */ `
  mutation DeleteAssignLegacy(
    $input: DeleteAssignLegacyInput!
    $condition: ModelAssignLegacyConditionInput
  ) {
    deleteAssignLegacy(input: $input, condition: $condition) {
      id
      owner
      Assetid
      Receiverid
      Sequence
      Percentage
      createdAt
      updatedAt
    }
  }
`;
export const createReceiver = /* GraphQL */ `
  mutation CreateReceiver(
    $input: CreateReceiverInput!
    $condition: ModelReceiverConditionInput
  ) {
    createReceiver(input: $input, condition: $condition) {
      id
      owner
      Title
      Fname
      Lname
      Sex
      Category
      RoleType
      Role
      Email
      PhoneCode
      PhoneNumber
      AccountActive
      createdAt
      updatedAt
    }
  }
`;
export const updateReceiver = /* GraphQL */ `
  mutation UpdateReceiver(
    $input: UpdateReceiverInput!
    $condition: ModelReceiverConditionInput
  ) {
    updateReceiver(input: $input, condition: $condition) {
      id
      owner
      Title
      Fname
      Lname
      Sex
      Category
      RoleType
      Role
      Email
      PhoneCode
      PhoneNumber
      AccountActive
      createdAt
      updatedAt
    }
  }
`;
export const deleteReceiver = /* GraphQL */ `
  mutation DeleteReceiver(
    $input: DeleteReceiverInput!
    $condition: ModelReceiverConditionInput
  ) {
    deleteReceiver(input: $input, condition: $condition) {
      id
      owner
      Title
      Fname
      Lname
      Sex
      Category
      RoleType
      Role
      Email
      PhoneCode
      PhoneNumber
      AccountActive
      createdAt
      updatedAt
    }
  }
`;
export const createCharity = /* GraphQL */ `
  mutation CreateCharity(
    $input: CreateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    createCharity(input: $input, condition: $condition) {
      id
      owner
      CharityName
      Address
      Province
      District
      Tambon
      PostCode
      Email
      PhoneCode
      PhoneNumber
      createdAt
      updatedAt
    }
  }
`;
export const updateCharity = /* GraphQL */ `
  mutation UpdateCharity(
    $input: UpdateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    updateCharity(input: $input, condition: $condition) {
      id
      owner
      CharityName
      Address
      Province
      District
      Tambon
      PostCode
      Email
      PhoneCode
      PhoneNumber
      createdAt
      updatedAt
    }
  }
`;
export const deleteCharity = /* GraphQL */ `
  mutation DeleteCharity(
    $input: DeleteCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    deleteCharity(input: $input, condition: $condition) {
      id
      owner
      CharityName
      Address
      Province
      District
      Tambon
      PostCode
      Email
      PhoneCode
      PhoneNumber
      createdAt
      updatedAt
    }
  }
`;
export const createLegacyManager = /* GraphQL */ `
  mutation CreateLegacyManager(
    $input: CreateLegacyManagerInput!
    $condition: ModelLegacyManagerConditionInput
  ) {
    createLegacyManager(input: $input, condition: $condition) {
      id
      owner
      ManagerType
      Title
      Fname
      Lname
      Role
      Email
      PhoneCode
      PhoneNumber
      AccountActive
      createdAt
      updatedAt
    }
  }
`;
export const updateLegacyManager = /* GraphQL */ `
  mutation UpdateLegacyManager(
    $input: UpdateLegacyManagerInput!
    $condition: ModelLegacyManagerConditionInput
  ) {
    updateLegacyManager(input: $input, condition: $condition) {
      id
      owner
      ManagerType
      Title
      Fname
      Lname
      Role
      Email
      PhoneCode
      PhoneNumber
      AccountActive
      createdAt
      updatedAt
    }
  }
`;
export const deleteLegacyManager = /* GraphQL */ `
  mutation DeleteLegacyManager(
    $input: DeleteLegacyManagerInput!
    $condition: ModelLegacyManagerConditionInput
  ) {
    deleteLegacyManager(input: $input, condition: $condition) {
      id
      owner
      ManagerType
      Title
      Fname
      Lname
      Role
      Email
      PhoneCode
      PhoneNumber
      AccountActive
      createdAt
      updatedAt
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      owner
      PaymentMethod
      BillFname
      BillLname
      BillEmail
      BillPhoneCode
      BillPhoneNumber
      BillAddress
      BillProvince
      BillDistrict
      BillTambon
      BillPostCode
      TotalPrice
      VoucherCode
      RefNo
      createdAt
      updatedAt
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      owner
      PaymentMethod
      BillFname
      BillLname
      BillEmail
      BillPhoneCode
      BillPhoneNumber
      BillAddress
      BillProvince
      BillDistrict
      BillTambon
      BillPostCode
      TotalPrice
      VoucherCode
      RefNo
      createdAt
      updatedAt
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      owner
      PaymentMethod
      BillFname
      BillLname
      BillEmail
      BillPhoneCode
      BillPhoneNumber
      BillAddress
      BillProvince
      BillDistrict
      BillTambon
      BillPostCode
      TotalPrice
      VoucherCode
      RefNo
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      owner
      CookieAccept
      AccountLevel
      ProfileImg
      Fname
      Lname
      PhoneCode
      PhoneNumber
      SubscribtionPlan
      SubscriptionDate
      SubExpireDate
      NotificationNews
      NotificationFeature
      PersonalPrivacy
      WebPrivacy
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      owner
      CookieAccept
      AccountLevel
      ProfileImg
      Fname
      Lname
      PhoneCode
      PhoneNumber
      SubscribtionPlan
      SubscriptionDate
      SubExpireDate
      NotificationNews
      NotificationFeature
      PersonalPrivacy
      WebPrivacy
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      owner
      CookieAccept
      AccountLevel
      ProfileImg
      Fname
      Lname
      PhoneCode
      PhoneNumber
      SubscribtionPlan
      SubscriptionDate
      SubExpireDate
      NotificationNews
      NotificationFeature
      PersonalPrivacy
      WebPrivacy
      createdAt
      updatedAt
    }
  }
`;
export const createUserInbox = /* GraphQL */ `
  mutation CreateUserInbox(
    $input: CreateUserInboxInput!
    $condition: ModelUserInboxConditionInput
  ) {
    createUserInbox(input: $input, condition: $condition) {
      id
      owner
      TopicType
      Topic
      Detail
      Email
      PhoneCode
      PhoneNumber
      Status
      AdminComment
      createdAt
      updatedAt
    }
  }
`;
export const updateUserInbox = /* GraphQL */ `
  mutation UpdateUserInbox(
    $input: UpdateUserInboxInput!
    $condition: ModelUserInboxConditionInput
  ) {
    updateUserInbox(input: $input, condition: $condition) {
      id
      owner
      TopicType
      Topic
      Detail
      Email
      PhoneCode
      PhoneNumber
      Status
      AdminComment
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserInbox = /* GraphQL */ `
  mutation DeleteUserInbox(
    $input: DeleteUserInboxInput!
    $condition: ModelUserInboxConditionInput
  ) {
    deleteUserInbox(input: $input, condition: $condition) {
      id
      owner
      TopicType
      Topic
      Detail
      Email
      PhoneCode
      PhoneNumber
      Status
      AdminComment
      createdAt
      updatedAt
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      owner
      BookingDate
      TimeDuration
      TopicType
      Topic
      Detail
      Status
      AdminComment
      createdAt
      updatedAt
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      owner
      BookingDate
      TimeDuration
      TopicType
      Topic
      Detail
      Status
      AdminComment
      createdAt
      updatedAt
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      owner
      BookingDate
      TimeDuration
      TopicType
      Topic
      Detail
      Status
      AdminComment
      createdAt
      updatedAt
    }
  }
`;
export const createProvision = /* GraphQL */ `
  mutation CreateProvision(
    $input: CreateProvisionInput!
    $condition: ModelProvisionConditionInput
  ) {
    createProvision(input: $input, condition: $condition) {
      id
      owner
      FName1
      LName1
      Email1
      PhoneCode1
      PhoneNumber1
      FName2
      LName2
      Email2
      PhoneCode2
      PhoneNumber2
      createdAt
      updatedAt
    }
  }
`;
export const updateProvision = /* GraphQL */ `
  mutation UpdateProvision(
    $input: UpdateProvisionInput!
    $condition: ModelProvisionConditionInput
  ) {
    updateProvision(input: $input, condition: $condition) {
      id
      owner
      FName1
      LName1
      Email1
      PhoneCode1
      PhoneNumber1
      FName2
      LName2
      Email2
      PhoneCode2
      PhoneNumber2
      createdAt
      updatedAt
    }
  }
`;
export const deleteProvision = /* GraphQL */ `
  mutation DeleteProvision(
    $input: DeleteProvisionInput!
    $condition: ModelProvisionConditionInput
  ) {
    deleteProvision(input: $input, condition: $condition) {
      id
      owner
      FName1
      LName1
      Email1
      PhoneCode1
      PhoneNumber1
      FName2
      LName2
      Email2
      PhoneCode2
      PhoneNumber2
      createdAt
      updatedAt
    }
  }
`;
export const createHomeCookies = /* GraphQL */ `
  mutation CreateHomeCookies(
    $input: CreateHomeCookiesInput!
    $condition: ModelHomeCookiesConditionInput
  ) {
    createHomeCookies(input: $input, condition: $condition) {
      id
      UID
      CookieAccept
      isMobile
      deviceType
      mobileVendor
      mobileModel
      osName
      osVersion
      browserName
      fullBrowserVersion
      createdAt
      updatedAt
    }
  }
`;