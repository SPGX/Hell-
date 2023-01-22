/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHomeCookies = /* GraphQL */ `
  query GetHomeCookies($id: ID!) {
    getHomeCookies(id: $id) {
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
export const listHomeCookies = /* GraphQL */ `
  query ListHomeCookies(
    $filter: ModelHomeCookiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomeCookies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDashboard = /* GraphQL */ `
  query GetDashboard($id: ID!) {
    getDashboard(id: $id) {
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
export const listDashboards = /* GraphQL */ `
  query ListDashboards(
    $filter: ModelDashboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderInfo = /* GraphQL */ `
  query GetOrderInfo($id: ID!) {
    getOrderInfo(id: $id) {
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
export const listOrderInfos = /* GraphQL */ `
  query ListOrderInfos(
    $filter: ModelOrderInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDocsDashboard = /* GraphQL */ `
  query GetDocsDashboard($id: ID!) {
    getDocsDashboard(id: $id) {
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
export const listDocsDashboards = /* GraphQL */ `
  query ListDocsDashboards(
    $filter: ModelDocsDashboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocsDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPersonalDocs = /* GraphQL */ `
  query GetPersonalDocs($id: ID!) {
    getPersonalDocs(id: $id) {
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
export const listPersonalDocs = /* GraphQL */ `
  query ListPersonalDocs(
    $filter: ModelPersonalDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWitnessDocs = /* GraphQL */ `
  query GetWitnessDocs($id: ID!) {
    getWitnessDocs(id: $id) {
      id
      owner
      CitizenCard
      createdAt
      updatedAt
    }
  }
`;
export const listWitnessDocs = /* GraphQL */ `
  query ListWitnessDocs(
    $filter: ModelWitnessDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWitnessDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        CitizenCard
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetDocs = /* GraphQL */ `
  query GetAssetDocs($id: ID!) {
    getAssetDocs(id: $id) {
      id
      owner
      DocType
      DocName
      createdAt
      updatedAt
    }
  }
`;
export const listAssetDocs = /* GraphQL */ `
  query ListAssetDocs(
    $filter: ModelAssetDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        DocType
        DocName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInsuranceDocs = /* GraphQL */ `
  query GetInsuranceDocs($id: ID!) {
    getInsuranceDocs(id: $id) {
      id
      owner
      InsuranceDocs
      createdAt
      updatedAt
    }
  }
`;
export const listInsuranceDocs = /* GraphQL */ `
  query ListInsuranceDocs(
    $filter: ModelInsuranceDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsuranceDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        InsuranceDocs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReceiverDocs = /* GraphQL */ `
  query GetReceiverDocs($id: ID!) {
    getReceiverDocs(id: $id) {
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
export const listReceiverDocs = /* GraphQL */ `
  query ListReceiverDocs(
    $filter: ModelReceiverDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceiverDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPetDocs = /* GraphQL */ `
  query GetPetDocs($id: ID!) {
    getPetDocs(id: $id) {
      id
      owner
      PetRegDoc
      PetImage
      createdAt
      updatedAt
    }
  }
`;
export const listPetDocs = /* GraphQL */ `
  query ListPetDocs(
    $filter: ModelPetDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPetDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        PetRegDoc
        PetImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWealtManagerDocs = /* GraphQL */ `
  query GetWealtManagerDocs($id: ID!) {
    getWealtManagerDocs(id: $id) {
      id
      owner
      WealtManagerDocs
      createdAt
      updatedAt
    }
  }
`;
export const listWealtManagerDocs = /* GraphQL */ `
  query ListWealtManagerDocs(
    $filter: ModelWealtManagerDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWealtManagerDocs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        WealtManagerDocs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOtherDocs = /* GraphQL */ `
  query GetOtherDocs($id: ID!) {
    getOtherDocs(id: $id) {
      id
      owner
      Docs
      createdAt
      updatedAt
    }
  }
`;
export const listOtherDocs = /* GraphQL */ `
  query ListOtherDocs(
    $filter: ModelOtherDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOtherDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        Docs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInsuranceInfo = /* GraphQL */ `
  query GetInsuranceInfo($id: ID!) {
    getInsuranceInfo(id: $id) {
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
export const listInsuranceInfos = /* GraphQL */ `
  query ListInsuranceInfos(
    $filter: ModelInsuranceInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsuranceInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetInstructions = /* GraphQL */ `
  query GetAssetInstructions($id: ID!) {
    getAssetInstructions(id: $id) {
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
export const listAssetInstructions = /* GraphQL */ `
  query ListAssetInstructions(
    $filter: ModelAssetInstructionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetInstructions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetLand = /* GraphQL */ `
  query GetAssetLand($id: ID!) {
    getAssetLand(id: $id) {
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
export const listAssetLands = /* GraphQL */ `
  query ListAssetLands(
    $filter: ModelAssetLandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetLands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetVehicles = /* GraphQL */ `
  query GetAssetVehicles($id: ID!) {
    getAssetVehicles(id: $id) {
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
export const listAssetVehicles = /* GraphQL */ `
  query ListAssetVehicles(
    $filter: ModelAssetVehiclesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetBankAccounts = /* GraphQL */ `
  query GetAssetBankAccounts($id: ID!) {
    getAssetBankAccounts(id: $id) {
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
export const listAssetBankAccounts = /* GraphQL */ `
  query ListAssetBankAccounts(
    $filter: ModelAssetBankAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetBankAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetLuxuryGoods = /* GraphQL */ `
  query GetAssetLuxuryGoods($id: ID!) {
    getAssetLuxuryGoods(id: $id) {
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
export const listAssetLuxuryGoods = /* GraphQL */ `
  query ListAssetLuxuryGoods(
    $filter: ModelAssetLuxuryGoodsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetLuxuryGoods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetArtWorks = /* GraphQL */ `
  query GetAssetArtWorks($id: ID!) {
    getAssetArtWorks(id: $id) {
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
export const listAssetArtWorks = /* GraphQL */ `
  query ListAssetArtWorks(
    $filter: ModelAssetArtWorksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetArtWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetNFT = /* GraphQL */ `
  query GetAssetNFT($id: ID!) {
    getAssetNFT(id: $id) {
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
export const listAssetNFTS = /* GraphQL */ `
  query ListAssetNFTS(
    $filter: ModelAssetNFTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetNFTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetGold = /* GraphQL */ `
  query GetAssetGold($id: ID!) {
    getAssetGold(id: $id) {
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
export const listAssetGolds = /* GraphQL */ `
  query ListAssetGolds(
    $filter: ModelAssetGoldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetGolds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetCryptoCurrency = /* GraphQL */ `
  query GetAssetCryptoCurrency($id: ID!) {
    getAssetCryptoCurrency(id: $id) {
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
export const listAssetCryptoCurrencies = /* GraphQL */ `
  query ListAssetCryptoCurrencies(
    $filter: ModelAssetCryptoCurrencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetCryptoCurrencies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetStock = /* GraphQL */ `
  query GetAssetStock($id: ID!) {
    getAssetStock(id: $id) {
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
export const listAssetStocks = /* GraphQL */ `
  query ListAssetStocks(
    $filter: ModelAssetStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetLoanPromise = /* GraphQL */ `
  query GetAssetLoanPromise($id: ID!) {
    getAssetLoanPromise(id: $id) {
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
export const listAssetLoanPromises = /* GraphQL */ `
  query ListAssetLoanPromises(
    $filter: ModelAssetLoanPromiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetLoanPromises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetCashSaving = /* GraphQL */ `
  query GetAssetCashSaving($id: ID!) {
    getAssetCashSaving(id: $id) {
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
export const listAssetCashSavings = /* GraphQL */ `
  query ListAssetCashSavings(
    $filter: ModelAssetCashSavingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetCashSavings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
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
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFuneral = /* GraphQL */ `
  query GetFuneral($id: ID!) {
    getFuneral(id: $id) {
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
export const listFunerals = /* GraphQL */ `
  query ListFunerals(
    $filter: ModelFuneralFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFunerals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssignLegacy = /* GraphQL */ `
  query GetAssignLegacy($id: ID!) {
    getAssignLegacy(id: $id) {
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
export const listAssignLegacies = /* GraphQL */ `
  query ListAssignLegacies(
    $filter: ModelAssignLegacyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignLegacies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        Assetid
        Receiverid
        Sequence
        Percentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReceiver = /* GraphQL */ `
  query GetReceiver($id: ID!) {
    getReceiver(id: $id) {
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
export const listReceivers = /* GraphQL */ `
  query ListReceivers(
    $filter: ModelReceiverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCharity = /* GraphQL */ `
  query GetCharity($id: ID!) {
    getCharity(id: $id) {
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
export const listCharities = /* GraphQL */ `
  query ListCharities(
    $filter: ModelCharityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLegacyManager = /* GraphQL */ `
  query GetLegacyManager($id: ID!) {
    getLegacyManager(id: $id) {
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
export const listLegacyManagers = /* GraphQL */ `
  query ListLegacyManagers(
    $filter: ModelLegacyManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLegacyManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserInbox = /* GraphQL */ `
  query GetUserInbox($id: ID!) {
    getUserInbox(id: $id) {
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
export const listUserInboxes = /* GraphQL */ `
  query ListUserInboxes(
    $filter: ModelUserInboxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInboxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProvision = /* GraphQL */ `
  query GetProvision($id: ID!) {
    getProvision(id: $id) {
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
export const listProvisions = /* GraphQL */ `
  query ListProvisions(
    $filter: ModelProvisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProvisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
