import moment from 'jalali-moment'

const toPersianDateTime = (isoDate) => {
  if (!isoDate) return { persianDate: '', persianTime: '' };
  
  const jalaliMoment = moment(isoDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ').locale('fa');
  const persianDate = jalaliMoment.format('YYYY/MM/DD');
  const persianTime = jalaliMoment.format('HH:mm');

  return { persianDate, persianTime };
};

export default toPersianDateTime
