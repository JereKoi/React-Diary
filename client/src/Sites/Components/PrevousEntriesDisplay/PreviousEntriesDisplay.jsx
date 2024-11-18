<div className="previous-entries-text">
          <h1>Your previous entries</h1>
          <button className="toggle-entries-button" onClick={toggleEntries}>
            <FontAwesomeIcon icon={showEntries ? faEyeSlash : faEye} />
          </button>
        </div>
        {showEntries && (
          <>
            <div className="folders-horizontal">
              {folders.map((folder) => (
                <Folder
                  key={folder.id}
                  name={folder.name}
                  entries={folder.entries}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </>
        )}