import React, {useContext, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {CalendarView} from '../components/CalendarView';
import LogContext from '../contexts/LogContext';
import {format} from 'date-fns';
import FeedList from '../components/FeedList';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = logs.reduce((acc, cur) => {
    const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      }></FeedList>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
