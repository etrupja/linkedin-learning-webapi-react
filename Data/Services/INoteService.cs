using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

public interface INoteService
{
    List<Note> GetAllNotes();
    Note GetNoteById(int noteId);
    void UpdateNote(int noteId, Note note);
    void DeleteNote(int noteId);
    void AddNote(Note note);
}