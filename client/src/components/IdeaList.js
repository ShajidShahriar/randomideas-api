import IdeasApi from "../services/ideasApi"
class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector("#idea-list");
    this._ideas = [];
    this.getIdeas();
    this._validTags = new Set();
    this._validTags.add("technology");
    this._validTags.add("software");
    this._validTags.add("business");
    this._validTags.add("education");
    this._validTags.add("health");
    this._validTags.add("inventions");
    this.addEventListeners()
  }
addEventListeners() {
    this._ideaListEl.addEventListener("click", (e) => {
      // 1. Look for the closest element with class 'delete' (handles clicking icon OR button)
      const deleteBtn = e.target.closest('.delete');
      
      // 2. Make sure the button exists before trying to access data
      if (deleteBtn) {
        e.stopImmediatePropagation();
        
        // 3. Since deleteBtn is the button, the parent is the card (div)
        const ideaID = deleteBtn.parentElement.dataset.id;
        
        console.log("Deleting ID:", ideaID); // Debugging check
        this.deleteidea(ideaID);
      }
    });
  }

  async deleteidea(ideaID) {
    try {
      // Delete from server
      await IdeasApi.deleteIdea(ideaID); // Removed 'res' since you aren't using it
      
      // FIX: Assign the filtered array back to this._ideas
      this._ideas = this._ideas.filter((idea) => idea._id !== ideaID);
      
      // Re-render immediately so the UI feels snappy
      this.getIdeas(); 
    } catch (error) {
      alert("You can not delete this resource");
      console.error(error);
    }
  }
  
  
  async getIdeas() {
    try {
      const res = await IdeasApi.getIdeas();
      this._ideas = res.data.data;
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render();
  }
  _getTagClass(tag) {
    tag = tag.toLowerCase();
    let tagClass = "";
    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = "";
    }
    return tagClass;
  }
  render() {
    this._ideaListEl.innerHTML = this._ideas.map((idea) => {
      const tagClass = this._getTagClass(idea.tag);
      const deleteBtn =
        idea.username === localStorage.getItem("username")
          ? `<button class="delete"><i class="fas fa-times"></i></button>`
          : "";

          const dateObj = new Date(idea.date);
          const formattedDate = dateObj.toDateString();
      return `
            <div class="card" data-id="${idea._id}">
            ${deleteBtn}
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}">${idea.tag.toLocaleUpperCase()}</p>
          <p>
            Posted on <span class="date">${formattedDate}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>`;
    }).join('');
  }
}

export default IdeaList