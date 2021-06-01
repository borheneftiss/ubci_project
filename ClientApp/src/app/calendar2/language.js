function myfunction($scope)  {
  $scope.uiConfigCenter = {
    calendar:{
      height: 450,
      editable: false,
      header:{
        left: 'title',
        center: '',
        right: 'today prev,next'
      },
      defaultDate: new Date(y, m , d),
      eventClick: $scope.alertOnEventClick,
      titleFormat:{
        month: 'YYYY年 MMMM',
      },
      monthNames: ['Jan.', 'Fév.', 'Mar.', 'Avril', 'Mai.', 'Juin.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'],
      monthNamesShort: ['Jan.', 'Fév.', 'Mar.', 'Avril', 'Mai.', 'Juin.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'],
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
      buttonText: {
        today:"Aujourd'hui"
      }
    }
  };
  
}   
