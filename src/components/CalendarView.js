import React from 'react';
import {Calendar} from 'react-native-calendars/src/index';
import {StyleSheet} from 'react-native';

export function CalendarView({markedDates, selectedDate, setSelectedDate}) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        todayTextColor: '#009688',
      }}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
