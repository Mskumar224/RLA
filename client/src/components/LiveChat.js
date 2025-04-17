import React, { useState } from 'react';
import { Fab, Box, Typography, TextField, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const LiveChat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSend = () => {
    // Placeholder for chatbot integration
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20 }}>
      <Fab color="secondary" onClick={handleToggle}>
        <ChatIcon />
      </Fab>
      {open && (
        <Box
          sx={{
            width: 300,
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            mt: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>Live Chat</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            How can we assist you today?
          </Typography>
          <TextField
            label="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            multiline
            rows={3}
            margin="normal"
          />
          <Button
            variant="contained"
            className="cta-button"
            onClick={handleSend}
            sx={{ mt: 1 }}
          >
            Send
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default LiveChat;