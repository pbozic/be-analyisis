-- CreateTable
CREATE TABLE "blog_tags" (
    "blog_tags_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "blog_tags_pkey" PRIMARY KEY ("blog_tags_id")
);

-- CreateTable
CREATE TABLE "blog_categories" (
    "blog_categories_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "blog_categories_pkey" PRIMARY KEY ("blog_categories_id")
);

-- CreateTable
CREATE TABLE "blog_posts" (
    "blog_posts_id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "short_content" TEXT,
    "image_file_id" UUID,
    "content" JSONB NOT NULL,
    "author_id" UUID NOT NULL,
    "category_id" UUID,
    "publish_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("blog_posts_id")
);

-- CreateTable
CREATE TABLE "_blog_posts_in_tag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_blog_posts_in_tag_AB_unique" ON "_blog_posts_in_tag"("A", "B");

-- CreateIndex
CREATE INDEX "_blog_posts_in_tag_B_index" ON "_blog_posts_in_tag"("B");

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_image_file_id_fkey" FOREIGN KEY ("image_file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "blog_categories"("blog_categories_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blog_posts_in_tag" ADD CONSTRAINT "_blog_posts_in_tag_A_fkey" FOREIGN KEY ("A") REFERENCES "blog_posts"("blog_posts_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blog_posts_in_tag" ADD CONSTRAINT "_blog_posts_in_tag_B_fkey" FOREIGN KEY ("B") REFERENCES "blog_tags"("blog_tags_id") ON DELETE CASCADE ON UPDATE CASCADE;
