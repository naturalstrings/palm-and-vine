-- CreateTable
CREATE TABLE "artists" (
    "artist_id" INTEGER NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "video_link" VARCHAR(100),
    "photo_link" VARCHAR(100),

    CONSTRAINT "artists_pkey" PRIMARY KEY ("artist_id")
);

-- CreateTable
CREATE TABLE "subscriber" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "subscriber_pkey" PRIMARY KEY ("id")
);

