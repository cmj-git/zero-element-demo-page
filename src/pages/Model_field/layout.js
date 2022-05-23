module.exports = {
  xname: 'Gridbox',
  props: {
    columns: 10
  },
  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row'
    },
    children: [
      // {
      //   presenter: "Title",
      //   gateway: {
      //     xname: "Binding",
      //     props: {
      //       binding: {
      //         modelName: "titleText"
      //       }
      //     }
      //   }
      // }
      // ,
      {
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              modelLabel: "titleText"
            }
          }
        }
      }

    ]
  },

  cart: {
    xname: 'Cart',
    props: {
      padding: '5px 10px',
      margin: '5px',
      linewidth: 1,
      fill: '#c9daf8',
      corner: '10px'
    }
  },
  container: 'SimCRUDList',
  navigation: {
    model: {
      delComfirmTips: true,
      api: {
        createAPI: '/api/crud/fieldModel/fieldModels',
        getAPI: '/api/crud/fieldModel/fieldModels/(id)',
        updateAPI: '/api/crud/fieldModel/fieldModels/(id)',
        deleteAPI: '/api/crud/fieldModel/fieldModels/(id)'
      },

      // "modelName": "TEST",
      // "modelLabel": "名称",
      // "defaultValue": "",
      // "isNotNull": 1,
      // "isUnique": 1,
      // "defaultFieldName": "name",
      // "optionalFieldName": "",
      // "fieldType": "varchar",
      // "fieldLength": 50,
      // "fieldFloatLength": 0,
      // "comments": ""
      fields: [{
        label: 'modelName',
        field: 'modelName',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入modelName',
        }
      }

      ]
    }
  }
};
