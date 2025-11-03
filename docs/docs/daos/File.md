# File DAO

<!-- DOCGEN:START addFileToDocument -->

### addFileToDocument

**Description**: Create a single file and connect it to a document.

**Parameters**:

- documentId: {string} - Document ID to connect the file to.
- fileData: {object} - File payload (url, mime_type, file_type, etc.).
- isPublic: {boolean} - Whether the file is public.

**Returns**: {Promise<object>} - Created file.

<!-- DOCGEN:END addFileToDocument -->

<!-- DOCGEN:START addFilesToDocument -->

### addFilesToDocument

**Description**: Create multiple files and connect them to a document.

**Parameters**:

- documentId: {string} - Document ID to connect the files to.
- filesData: {object|object[]} - Single file payload or array of file payloads.

**Returns**: {Promise<object[]>} - Created files.

<!-- DOCGEN:END addFilesToDocument -->

<!-- DOCGEN:START updateFileInDocument -->

### updateFileInDocument

**Description**: Update a single file by id and optionally set public flag.

**Parameters**:

- fileId: {string} - File ID.
- updateData: {object} - Fields to update.
- isPublic: {boolean} - Whether the file is public.

**Returns**: {Promise<object>} - Updated file.

<!-- DOCGEN:END updateFileInDocument -->

<!-- DOCGEN:START removeFileFromDocument -->

### removeFileFromDocument

**Description**: Disconnect a file from its document and delete it.

**Parameters**:

- fileId: {string} - File ID.

**Returns**: {Promise<object>} - Deleted file.

<!-- DOCGEN:END removeFileFromDocument -->

<!-- DOCGEN:START removeAllFilesFromDocument -->

### removeAllFilesFromDocument

**Description**: Remove all files linked to a document (disconnect and delete).

**Parameters**:

- documentId: {string} - Document ID.

**Returns**: {Promise<object>} - Result of deleteMany.

<!-- DOCGEN:END removeAllFilesFromDocument -->

<!-- DOCGEN:START getFilesByDocumentId -->

### getFilesByDocumentId

**Description**: Get all files for a document.

**Parameters**:

- document_id: {string} - Document ID.

**Returns**: {Promise<object[]>} - Files.

<!-- DOCGEN:END getFilesByDocumentId -->

<!-- DOCGEN:START createFile -->

### createFile

**Description**: Create a standalone file row (not linked to a document).

**Parameters**:

- file_type: {string} - Application file type enum.
- mime_type: {string} - MIME type.
- isPublic?: {boolean} - Whether the file is public.

**Returns**: {Promise<object>} - Created file.

<!-- DOCGEN:END createFile -->

<!-- DOCGEN:START getFile -->

### getFile

**Description**: Get a single file by ID.

**Parameters**:

- file_id: {string} - File ID.

**Returns**: {Promise<object|null>} - File or null.

<!-- DOCGEN:END getFile -->

<!-- DOCGEN:START updateFileById -->

### updateFileById

**Description**: Update file metadata by ID.

**Parameters**:

- file_id: {string} - File ID.
- file_type: {string} - Application file type.
- mime_type: {string} - MIME type.
- url: {string} - File URL.

**Returns**: {Promise<object>} - Updated file.

<!-- DOCGEN:END updateFileById -->
