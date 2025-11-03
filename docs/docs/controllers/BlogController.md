# BlogController Controller

<!-- DOCGEN:START searchBlogPosts -->

### searchBlogPosts

**Summary**: Search blog posts

**Description**: Retrieves a list of blog posts based on search criteria.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/searchBlogPosts)

<!-- DOCGEN:END searchBlogPosts -->

<!-- DOCGEN:START getBlogPostById -->

### getBlogPostById

**Summary**: Get blog post by ID

**Description**: Retrieves a single blog post by its unique ID.

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBlogPostById)

<!-- DOCGEN:END getBlogPostById -->

<!-- DOCGEN:START getBlogPostBySlug -->

### getBlogPostBySlug

**Summary**: Get blog post by slug

**Description**: Retrieves a single blog post by its unique slug.

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBlogPostBySlug)

<!-- DOCGEN:END getBlogPostBySlug -->

<!-- DOCGEN:START createBlogPost -->

### createBlogPost

**Summary**: Create a new blog post

**Description**: Creates a new blog post with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBlogPost)

<!-- DOCGEN:END createBlogPost -->

<!-- DOCGEN:START updateBlogPost -->

### updateBlogPost

**Summary**: Update a blog post

**Description**: Updates an existing blog post by ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBlogPost)

<!-- DOCGEN:END updateBlogPost -->

<!-- DOCGEN:START deleteBlogPost -->

### deleteBlogPost

**Summary**: Delete a blog post

**Description**: Deletes a blog post by its unique ID.

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBlogPost)

<!-- DOCGEN:END deleteBlogPost -->

<!-- DOCGEN:START getBlogPosts -->

### getBlogPosts

**Summary**: Get all blog posts

**Description**: Retrieves all blog posts.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBlogPosts)

<!-- DOCGEN:END getBlogPosts -->

<!-- DOCGEN:START getBlogCategories -->

### getBlogCategories

**Summary**: Get all blog categories

**Description**: Retrieves all blog categories.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBlogCategories)

<!-- DOCGEN:END getBlogCategories -->

<!-- DOCGEN:START createBlogCategory -->

### createBlogCategory

**Summary**: Create a new blog category

**Description**: Creates a new blog category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBlogCategory)

<!-- DOCGEN:END createBlogCategory -->

<!-- DOCGEN:START deleteBlogCategory -->

### deleteBlogCategory

**Summary**: Delete a blog category

**Description**: Deletes a blog category by its unique ID.

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBlogCategory)

<!-- DOCGEN:END deleteBlogCategory -->

<!-- DOCGEN:START updateBlogCategory -->

### updateBlogCategory

**Summary**: Update a blog category

**Description**: Updates an existing blog category by ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBlogCategory)

<!-- DOCGEN:END updateBlogCategory -->

<!-- DOCGEN:START getBlogTags -->

### getBlogTags

**Summary**: Get all blog tags

**Description**: Retrieves all blog tags.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBlogTags)

<!-- DOCGEN:END getBlogTags -->

<!-- DOCGEN:START createBlogTag -->

### createBlogTag

**Summary**: Create a new blog tag

**Description**: Creates a new blog tag.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201
- 400
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBlogTag)

<!-- DOCGEN:END createBlogTag -->

<!-- DOCGEN:START deleteBlogTag -->

### deleteBlogTag

**Summary**: Delete a blog tag

**Description**: Deletes a blog tag by its unique ID.

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBlogTag)

<!-- DOCGEN:END deleteBlogTag -->

<!-- DOCGEN:START updateBlogTag -->

### updateBlogTag

**Summary**: Update a blog tag

**Description**: Updates an existing blog tag by ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBlogTag)

<!-- DOCGEN:END updateBlogTag -->

<!-- DOCGEN:START createBlogImageByUrl -->

### createBlogImageByUrl

**Summary**: Create blog image by URL

**Description**: Creates a new image file from a provided URL.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201
- 400
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBlogImageByUrl)

<!-- DOCGEN:END createBlogImageByUrl -->

<!-- DOCGEN:START createBlogImageByFile -->

### createBlogImageByFile

**Summary**: Create blog image by file

**Description**: Creates a new image file from an uploaded file.

**Request Body:** (required)
Type: `multipart/form-data`
Content-Type: `application/json`

**Responses:**

- 201
- 400
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBlogImageByFile)

<!-- DOCGEN:END createBlogImageByFile -->
