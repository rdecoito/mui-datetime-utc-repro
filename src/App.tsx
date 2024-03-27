import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

dayjs.extend(utc);

function App() {
  const [time, setTime] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
        gap={3}
        textAlign="center"
      >
        <Typography>
          The output of <code>dayjs(time).format('HH')</code>:
          <br />
          {dayjs(time).format("HH")}
        </Typography>
        <MobileDateTimePicker
          timezone="UTC"
          label="Test"
          views={["day", "hours", "minutes", "seconds"]}
          format="HH"
          ampm={false}
          value={time}
          onChange={(newTime) => setTime(newTime)}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default App;
