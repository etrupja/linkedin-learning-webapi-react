using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

public class NoteService : INoteService
{
    public void DeleteNote(int noteId)
    {
        var note = Data.Notes.FirstOrDefault(n => n.Id == noteId);
        Data.Notes.Remove(note);
    }

    public List<Note> GetAllNotes()
    {
        return Data.Notes.ToList();
    }
    public Note GetNoteById(int noteId)
    {
        var note = Data.Notes.FirstOrDefault(n => n.Id == noteId);
        return note;
    }

    public void UpdateNote(int noteId, Note note)
    {
        var oldNote = Data.Notes.FirstOrDefault(n => n.Id == noteId);

        oldNote.Title = note.Title;
        oldNote.Description = note.Description;
        oldNote.DateAdded = note.DateAdded;
        oldNote.DateUpdated = note.DateUpdated;
    }

    public void AddNote(Note note)
    {
        Data.Notes.Add(note);
    }
}