export class Utils {
  public static formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  static convertToDate(startDate: string) {

    console.log(startDate.substring(0, 4) + '-' + startDate.substring(5, 7) + '-' + startDate.substring(8, 10));

    return new Date(parseInt(startDate.substring(0, 4), 0),
      parseInt(startDate.substring(5, 7), 0) - 1,
      parseInt(startDate.substring(8, 10), 0));

  }

  static nbDays(startDate: Date, endDate: Date) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    var diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));

    return diffDays;
  }
}
