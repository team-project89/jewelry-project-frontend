import { useState, useEffect } from 'react'
import moment from 'jalali-moment'

const toPersianDateTime = (isoDate) => {
  const [persianDate, setPersianDate] = useState('')
  const [persianTime, setPersianTime] = useState('')

  useEffect(() => {
    if (isoDate) {
      const jalaliMoment = moment(isoDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ').locale('fa')
      const date = jalaliMoment.format('YYYY/MM/DD')
      const time = jalaliMoment.format('HH:mm')
      setPersianDate(date);
      setPersianTime(time);
    }
  }, [isoDate]);

  return { persianDate, persianTime }
};

export default toPersianDateTime
