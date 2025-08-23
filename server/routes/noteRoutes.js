import express from 'express';
import Note from '../models/Note.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user._id; 

    const newNote = new Note({
      user: userId,
      title,
      content,
    });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteId = req.params.id;
    const userId = req.user._id;

    const note = await Note.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (note.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Forbidden: You do not own this note' });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true } 
    );

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const noteId = req.params.id;
    const userId = req.user._id;

    const note = await Note.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (note.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Forbidden: You do not own this note' });
    }

    await Note.findByIdAndDelete(noteId);

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;