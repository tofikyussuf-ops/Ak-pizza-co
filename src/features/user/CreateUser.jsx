import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    // Added animate-fade-in to make the form slide in smoothly
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        /* Added focus-visible for better accessibility and transition for smoothness */
        className="input mb-8 w-72 transition-all duration-300 focus:w-80"
      />

      {username !== '' && (
        // Added a slight bounce or fade-in to the button so it appears purposefully
        <div className="animate-fade-in">
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;