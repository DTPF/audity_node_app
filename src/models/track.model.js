const { Schema, model } = require('mongoose')

const TrackSchema = new Schema({
	userId: String,
	name: String,
	artists: [{
		type: Schema.Types.ObjectId,
		ref: 'Artist'
	}],
	imageUrl: String,
	audioUrl: String,
	imagePublicId: String,
	audioPublicId: String,
	genres: [{
		type: Schema.Types.ObjectId,
		ref: 'Genre'
	}],
	likedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	album: {
		type: Schema.Types.ObjectId,
		ref: 'Album'
	},
	playlists: [{
		type: Schema.Types.ObjectId,
		ref: 'Playlist'
	}],
	rating: Number,
	popularity: Number,
	duration: Number,
	released: Date,
	publicAccessible: Boolean,
	uploadByUser: {
		name: String,
		artists: String
	}
}, {
	timestamps: true
}
)

TrackSchema.index({ name: 'text' });
const TrackModel = model('Track', TrackSchema)

module.exports = TrackModel