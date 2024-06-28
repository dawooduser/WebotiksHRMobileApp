import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { CommonActions } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Platform } from "react-native";
import { request, PERMISSIONS } from 'react-native-permissions';
export const genericWidth = (ratio) => scale(ratio);
export const genericHeight = (ratio) => verticalScale(ratio);
export const genericRatio = (ratio) => moderateScale(ratio);

// export const dispatch = useDispatch()

export const screenNavigation = (navigation, path = "", data = {}) => {
  // console.log("navigation", navigation)
  navigation.navigate(path, data);
};
export const hardScreenNavigation = (navigaiton, name = "", params = {}) =>
  navigaiton.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  );
export const HttpToastMsg = (msg = "") => showToastMsg("info", msg);

export function showToastMsg(type = "success", msg = "", position = "bottom") {
  // success, error, info
  return Toast.show({
    type, //'success' | 'error' | 'info'
    text1: msg,
    position,
  });
}
export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
export function textDotDot(mytextvar, maxlimit) {
  return mytextvar.length > maxlimit
    ? mytextvar.substring(0, maxlimit - 3) + "..."
    : mytextvar;
}
export function getRandomValueRange(min, max) {
  return Math.random() * (max - min) + min;
}
export const getCurrentLocationPermission = (cb) => {
  const _platform = Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  request(_platform).then((result) => {
    cb(result)
  }).catch(error => {
    cb('blocked')
    showToastMsg('error', error?.message || "Something went wrong")
  })
}

export const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM' || modifier === 'Pm') {
    hours = parseInt(hours, 10) + 12;
  }
  return {
    hours, minutes
  }
}

export const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
export const yearList = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
export const listofYearRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
// const currentYear = (new Date()).getFullYear();
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
// console.log(range(currentYear, currentYear - 50, -1)); 
// [2019, 2018, 2017, 2016, ..., 1969]

export const AttendanceData = {
  "January": [
    {
      "checkIN": '00:20',
      "checkOut": '16:20',
      "day": "Monday",
      "date": "10",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '10:20',
      "checkOut": '16:20',
      "day": "Wednesday",
      "date": "15",
      "shift": "Day"
    }
  ],
  "February": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "March": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "April": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "May": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "June": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "July": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "August": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "September": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "October": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "November": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
  "December": [
    {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "08",
      "shift": "Day"
    }, {
      "checkIN": '',
      "checkOut": '',
      "day": "Thrusday",
      "date": "09",
      "shift": "Day"
    }, {
      "checkIN": '16:20',
      "checkOut": '16:20',
      "day": "Thrusday",
      "date": "12",
      "shift": "Day"
    }
  ],
}