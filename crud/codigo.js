$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nome",
              key: "name"
          },
          {
              text: "Idade",
              key: "Dia_nascimento"
          },
          {
              text: "Sexo",
              key: "sexo"
          },
          {
              text: "Telefone",
              key: "telefone"
          },        
        ],
 
        //carga de datos
        data: [{
              name: 'Auricelio da Siva',
              Dia_nascimento: 30,
              sexo: 'M',
              telefone: '9999999999'    
          },
          {
              name: 'Saulo dev',
              Dia_nascimento: 24,
              sexo: 'M',
              telefone: '87878787878'
          },
          {
              name: 'professor Alexandre',
              Dia_nascimento: 31,
              sexo: 'M',
              telefone: '98999999999'
          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Adicionar" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Excluir" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Salvar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "Dia_nascimento") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "sexo") {
              return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    