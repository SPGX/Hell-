/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
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
export const onCreateHomeCookies = /* GraphQL */ `
  subscription OnCreateHomeCookies {
    onCreateHomeCookies {
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
export const onUpdateHomeCookies = /* GraphQL */ `
  subscription OnUpdateHomeCookies {
    onUpdateHomeCookies {
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
export const onDeleteHomeCookies = /* GraphQL */ `
  subscription OnDeleteHomeCookies {
    onDeleteHomeCookies {
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
export const onCreateDashboard = /* GraphQL */ `
  subscription OnCreateDashboard($owner: String) {
    onCreateDashboard(owner: $owner) {
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
export const onUpdateDashboard = /* GraphQL */ `
  subscription OnUpdateDashboard($owner: String) {
    onUpdateDashboard(owner: $owner) {
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
export const onDeleteDashboard = /* GraphQL */ `
  subscription OnDeleteDashboard($owner: String) {
    onDeleteDashboard(owner: $owner) {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($owner: String) {
    onCreatePerson(owner: $owner) {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($owner: String) {
    onUpdatePerson(owner: $owner) {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($owner: String) {
    onDeletePerson(owner: $owner) {
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
export const onCreateOrderInfo = /* GraphQL */ `
  subscription OnCreateOrderInfo($owner: String) {
    onCreateOrderInfo(owner: $owner) {
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
export const onUpdateOrderInfo = /* GraphQL */ `
  subscription OnUpdateOrderInfo($owner: String) {
    onUpdateOrderInfo(owner: $owner) {
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
export const onDeleteOrderInfo = /* GraphQL */ `
  subscription OnDeleteOrderInfo($owner: String) {
    onDeleteOrderInfo(owner: $owner) {
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
export const onCreateDocsDashboard = /* GraphQL */ `
  subscription OnCreateDocsDashboard($owner: String) {
    onCreateDocsDashboard(owner: $owner) {
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
export const onUpdateDocsDashboard = /* GraphQL */ `
  subscription OnUpdateDocsDashboard($owner: String) {
    onUpdateDocsDashboard(owner: $owner) {
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
export const onDeleteDocsDashboard = /* GraphQL */ `
  subscription OnDeleteDocsDashboard($owner: String) {
    onDeleteDocsDashboard(owner: $owner) {
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
export const onCreatePersonalDocs = /* GraphQL */ `
  subscription OnCreatePersonalDocs($owner: String) {
    onCreatePersonalDocs(owner: $owner) {
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
export const onUpdatePersonalDocs = /* GraphQL */ `
  subscription OnUpdatePersonalDocs($owner: String) {
    onUpdatePersonalDocs(owner: $owner) {
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
export const onDeletePersonalDocs = /* GraphQL */ `
  subscription OnDeletePersonalDocs($owner: String) {
    onDeletePersonalDocs(owner: $owner) {
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
export const onCreateWitnessDocs = /* GraphQL */ `
  subscription OnCreateWitnessDocs($owner: String) {
    onCreateWitnessDocs(owner: $owner) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWitnessDocs = /* GraphQL */ `
  subscription OnUpdateWitnessDocs($owner: String) {
    onUpdateWitnessDocs(owner: $owner) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWitnessDocs = /* GraphQL */ `
  subscription OnDeleteWitnessDocs($owner: String) {
    onDeleteWitnessDocs(owner: $owner) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAssetDocs = /* GraphQL */ `
  subscription OnCreateAssetDocs($owner: String) {
    onCreateAssetDocs(owner: $owner) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAssetDocs = /* GraphQL */ `
  subscription OnUpdateAssetDocs($owner: String) {
    onUpdateAssetDocs(owner: $owner) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAssetDocs = /* GraphQL */ `
  subscription OnDeleteAssetDocs($owner: String) {
    onDeleteAssetDocs(owner: $owner) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInsuranceDocs = /* GraphQL */ `
  subscription OnCreateInsuranceDocs($owner: String) {
    onCreateInsuranceDocs(owner: $owner) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInsuranceDocs = /* GraphQL */ `
  subscription OnUpdateInsuranceDocs($owner: String) {
    onUpdateInsuranceDocs(owner: $owner) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInsuranceDocs = /* GraphQL */ `
  subscription OnDeleteInsuranceDocs($owner: String) {
    onDeleteInsuranceDocs(owner: $owner) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReceiverDocs = /* GraphQL */ `
  subscription OnCreateReceiverDocs($owner: String) {
    onCreateReceiverDocs(owner: $owner) {
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
export const onUpdateReceiverDocs = /* GraphQL */ `
  subscription OnUpdateReceiverDocs($owner: String) {
    onUpdateReceiverDocs(owner: $owner) {
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
export const onDeleteReceiverDocs = /* GraphQL */ `
  subscription OnDeleteReceiverDocs($owner: String) {
    onDeleteReceiverDocs(owner: $owner) {
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
export const onCreatePetDocs = /* GraphQL */ `
  subscription OnCreatePetDocs($owner: String) {
    onCreatePetDocs(owner: $owner) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePetDocs = /* GraphQL */ `
  subscription OnUpdatePetDocs($owner: String) {
    onUpdatePetDocs(owner: $owner) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePetDocs = /* GraphQL */ `
  subscription OnDeletePetDocs($owner: String) {
    onDeletePetDocs(owner: $owner) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWealtManagerDocs = /* GraphQL */ `
  subscription OnCreateWealtManagerDocs($owner: String) {
    onCreateWealtManagerDocs(owner: $owner) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWealtManagerDocs = /* GraphQL */ `
  subscription OnUpdateWealtManagerDocs($owner: String) {
    onUpdateWealtManagerDocs(owner: $owner) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWealtManagerDocs = /* GraphQL */ `
  subscription OnDeleteWealtManagerDocs($owner: String) {
    onDeleteWealtManagerDocs(owner: $owner) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOtherDocs = /* GraphQL */ `
  subscription OnCreateOtherDocs($owner: String) {
    onCreateOtherDocs(owner: $owner) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOtherDocs = /* GraphQL */ `
  subscription OnUpdateOtherDocs($owner: String) {
    onUpdateOtherDocs(owner: $owner) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOtherDocs = /* GraphQL */ `
  subscription OnDeleteOtherDocs($owner: String) {
    onDeleteOtherDocs(owner: $owner) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInsuranceInfo = /* GraphQL */ `
  subscription OnCreateInsuranceInfo($owner: String) {
    onCreateInsuranceInfo(owner: $owner) {
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
export const onUpdateInsuranceInfo = /* GraphQL */ `
  subscription OnUpdateInsuranceInfo($owner: String) {
    onUpdateInsuranceInfo(owner: $owner) {
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
export const onDeleteInsuranceInfo = /* GraphQL */ `
  subscription OnDeleteInsuranceInfo($owner: String) {
    onDeleteInsuranceInfo(owner: $owner) {
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
export const onCreateAssetInstructions = /* GraphQL */ `
  subscription OnCreateAssetInstructions($owner: String) {
    onCreateAssetInstructions(owner: $owner) {
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
export const onUpdateAssetInstructions = /* GraphQL */ `
  subscription OnUpdateAssetInstructions($owner: String) {
    onUpdateAssetInstructions(owner: $owner) {
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
export const onDeleteAssetInstructions = /* GraphQL */ `
  subscription OnDeleteAssetInstructions($owner: String) {
    onDeleteAssetInstructions(owner: $owner) {
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
export const onCreateAssetLand = /* GraphQL */ `
  subscription OnCreateAssetLand($owner: String) {
    onCreateAssetLand(owner: $owner) {
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
export const onUpdateAssetLand = /* GraphQL */ `
  subscription OnUpdateAssetLand($owner: String) {
    onUpdateAssetLand(owner: $owner) {
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
export const onDeleteAssetLand = /* GraphQL */ `
  subscription OnDeleteAssetLand($owner: String) {
    onDeleteAssetLand(owner: $owner) {
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
export const onCreateAssetVehicles = /* GraphQL */ `
  subscription OnCreateAssetVehicles($owner: String) {
    onCreateAssetVehicles(owner: $owner) {
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
export const onUpdateAssetVehicles = /* GraphQL */ `
  subscription OnUpdateAssetVehicles($owner: String) {
    onUpdateAssetVehicles(owner: $owner) {
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
export const onDeleteAssetVehicles = /* GraphQL */ `
  subscription OnDeleteAssetVehicles($owner: String) {
    onDeleteAssetVehicles(owner: $owner) {
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
export const onCreateAssetBankAccounts = /* GraphQL */ `
  subscription OnCreateAssetBankAccounts($owner: String) {
    onCreateAssetBankAccounts(owner: $owner) {
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
export const onUpdateAssetBankAccounts = /* GraphQL */ `
  subscription OnUpdateAssetBankAccounts($owner: String) {
    onUpdateAssetBankAccounts(owner: $owner) {
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
export const onDeleteAssetBankAccounts = /* GraphQL */ `
  subscription OnDeleteAssetBankAccounts($owner: String) {
    onDeleteAssetBankAccounts(owner: $owner) {
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
export const onCreateAssetLuxuryGoods = /* GraphQL */ `
  subscription OnCreateAssetLuxuryGoods($owner: String) {
    onCreateAssetLuxuryGoods(owner: $owner) {
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
export const onUpdateAssetLuxuryGoods = /* GraphQL */ `
  subscription OnUpdateAssetLuxuryGoods($owner: String) {
    onUpdateAssetLuxuryGoods(owner: $owner) {
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
export const onDeleteAssetLuxuryGoods = /* GraphQL */ `
  subscription OnDeleteAssetLuxuryGoods($owner: String) {
    onDeleteAssetLuxuryGoods(owner: $owner) {
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
export const onCreateAssetArtWorks = /* GraphQL */ `
  subscription OnCreateAssetArtWorks($owner: String) {
    onCreateAssetArtWorks(owner: $owner) {
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
export const onUpdateAssetArtWorks = /* GraphQL */ `
  subscription OnUpdateAssetArtWorks($owner: String) {
    onUpdateAssetArtWorks(owner: $owner) {
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
export const onDeleteAssetArtWorks = /* GraphQL */ `
  subscription OnDeleteAssetArtWorks($owner: String) {
    onDeleteAssetArtWorks(owner: $owner) {
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
export const onCreateAssetNFT = /* GraphQL */ `
  subscription OnCreateAssetNFT($owner: String) {
    onCreateAssetNFT(owner: $owner) {
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
export const onUpdateAssetNFT = /* GraphQL */ `
  subscription OnUpdateAssetNFT($owner: String) {
    onUpdateAssetNFT(owner: $owner) {
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
export const onDeleteAssetNFT = /* GraphQL */ `
  subscription OnDeleteAssetNFT($owner: String) {
    onDeleteAssetNFT(owner: $owner) {
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
export const onCreateAssetGold = /* GraphQL */ `
  subscription OnCreateAssetGold($owner: String) {
    onCreateAssetGold(owner: $owner) {
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
export const onUpdateAssetGold = /* GraphQL */ `
  subscription OnUpdateAssetGold($owner: String) {
    onUpdateAssetGold(owner: $owner) {
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
export const onDeleteAssetGold = /* GraphQL */ `
  subscription OnDeleteAssetGold($owner: String) {
    onDeleteAssetGold(owner: $owner) {
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
export const onCreateAssetCryptoCurrency = /* GraphQL */ `
  subscription OnCreateAssetCryptoCurrency($owner: String) {
    onCreateAssetCryptoCurrency(owner: $owner) {
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
export const onUpdateAssetCryptoCurrency = /* GraphQL */ `
  subscription OnUpdateAssetCryptoCurrency($owner: String) {
    onUpdateAssetCryptoCurrency(owner: $owner) {
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
export const onDeleteAssetCryptoCurrency = /* GraphQL */ `
  subscription OnDeleteAssetCryptoCurrency($owner: String) {
    onDeleteAssetCryptoCurrency(owner: $owner) {
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
export const onCreateAssetStock = /* GraphQL */ `
  subscription OnCreateAssetStock($owner: String) {
    onCreateAssetStock(owner: $owner) {
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
export const onUpdateAssetStock = /* GraphQL */ `
  subscription OnUpdateAssetStock($owner: String) {
    onUpdateAssetStock(owner: $owner) {
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
export const onDeleteAssetStock = /* GraphQL */ `
  subscription OnDeleteAssetStock($owner: String) {
    onDeleteAssetStock(owner: $owner) {
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
export const onCreateAssetLoanPromise = /* GraphQL */ `
  subscription OnCreateAssetLoanPromise($owner: String) {
    onCreateAssetLoanPromise(owner: $owner) {
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
export const onUpdateAssetLoanPromise = /* GraphQL */ `
  subscription OnUpdateAssetLoanPromise($owner: String) {
    onUpdateAssetLoanPromise(owner: $owner) {
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
export const onDeleteAssetLoanPromise = /* GraphQL */ `
  subscription OnDeleteAssetLoanPromise($owner: String) {
    onDeleteAssetLoanPromise(owner: $owner) {
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
export const onCreateAssetCashSaving = /* GraphQL */ `
  subscription OnCreateAssetCashSaving($owner: String) {
    onCreateAssetCashSaving(owner: $owner) {
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
export const onUpdateAssetCashSaving = /* GraphQL */ `
  subscription OnUpdateAssetCashSaving($owner: String) {
    onUpdateAssetCashSaving(owner: $owner) {
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
export const onDeleteAssetCashSaving = /* GraphQL */ `
  subscription OnDeleteAssetCashSaving($owner: String) {
    onDeleteAssetCashSaving(owner: $owner) {
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
export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet($owner: String) {
    onCreatePet(owner: $owner) {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet($owner: String) {
    onUpdatePet(owner: $owner) {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet($owner: String) {
    onDeletePet(owner: $owner) {
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
export const onCreateFuneral = /* GraphQL */ `
  subscription OnCreateFuneral($owner: String) {
    onCreateFuneral(owner: $owner) {
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
export const onUpdateFuneral = /* GraphQL */ `
  subscription OnUpdateFuneral($owner: String) {
    onUpdateFuneral(owner: $owner) {
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
export const onDeleteFuneral = /* GraphQL */ `
  subscription OnDeleteFuneral($owner: String) {
    onDeleteFuneral(owner: $owner) {
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
export const onCreateAssignLegacy = /* GraphQL */ `
  subscription OnCreateAssignLegacy($owner: String) {
    onCreateAssignLegacy(owner: $owner) {
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
export const onUpdateAssignLegacy = /* GraphQL */ `
  subscription OnUpdateAssignLegacy($owner: String) {
    onUpdateAssignLegacy(owner: $owner) {
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
export const onDeleteAssignLegacy = /* GraphQL */ `
  subscription OnDeleteAssignLegacy($owner: String) {
    onDeleteAssignLegacy(owner: $owner) {
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
export const onCreateReceiver = /* GraphQL */ `
  subscription OnCreateReceiver($owner: String) {
    onCreateReceiver(owner: $owner) {
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
export const onUpdateReceiver = /* GraphQL */ `
  subscription OnUpdateReceiver($owner: String) {
    onUpdateReceiver(owner: $owner) {
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
export const onDeleteReceiver = /* GraphQL */ `
  subscription OnDeleteReceiver($owner: String) {
    onDeleteReceiver(owner: $owner) {
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
export const onCreateCharity = /* GraphQL */ `
  subscription OnCreateCharity($owner: String) {
    onCreateCharity(owner: $owner) {
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
export const onUpdateCharity = /* GraphQL */ `
  subscription OnUpdateCharity($owner: String) {
    onUpdateCharity(owner: $owner) {
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
export const onDeleteCharity = /* GraphQL */ `
  subscription OnDeleteCharity($owner: String) {
    onDeleteCharity(owner: $owner) {
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
export const onCreateLegacyManager = /* GraphQL */ `
  subscription OnCreateLegacyManager($owner: String) {
    onCreateLegacyManager(owner: $owner) {
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
export const onUpdateLegacyManager = /* GraphQL */ `
  subscription OnUpdateLegacyManager($owner: String) {
    onUpdateLegacyManager(owner: $owner) {
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
export const onDeleteLegacyManager = /* GraphQL */ `
  subscription OnDeleteLegacyManager($owner: String) {
    onDeleteLegacyManager(owner: $owner) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($owner: String) {
    onCreatePayment(owner: $owner) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($owner: String) {
    onUpdatePayment(owner: $owner) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($owner: String) {
    onDeletePayment(owner: $owner) {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
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
export const onCreateUserInbox = /* GraphQL */ `
  subscription OnCreateUserInbox($owner: String) {
    onCreateUserInbox(owner: $owner) {
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
export const onUpdateUserInbox = /* GraphQL */ `
  subscription OnUpdateUserInbox($owner: String) {
    onUpdateUserInbox(owner: $owner) {
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
export const onDeleteUserInbox = /* GraphQL */ `
  subscription OnDeleteUserInbox($owner: String) {
    onDeleteUserInbox(owner: $owner) {
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($owner: String) {
    onCreateBooking(owner: $owner) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($owner: String) {
    onUpdateBooking(owner: $owner) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($owner: String) {
    onDeleteBooking(owner: $owner) {
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
export const onCreateProvision = /* GraphQL */ `
  subscription OnCreateProvision($owner: String) {
    onCreateProvision(owner: $owner) {
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
export const onUpdateProvision = /* GraphQL */ `
  subscription OnUpdateProvision($owner: String) {
    onUpdateProvision(owner: $owner) {
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
export const onDeleteProvision = /* GraphQL */ `
  subscription OnDeleteProvision($owner: String) {
    onDeleteProvision(owner: $owner) {
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
