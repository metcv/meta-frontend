import mongoose from 'mongoose';

const NFTSchema = new mongoose.Schema({
  tokenId: {
      type: Number,
      required: true,
      unique: true
  },
  contractAddress: {
      type: String,
      required: true,
      lowercase: true
  },
  creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  metadata: {
      name: { 
          type: String, 
          required: true 
      },
      description: { 
          type: String 
      },
      image: { 
          type: String, 
          required: true 
      },
      attributes: [{
          traitType: String,
          value: String,
          rarity: Number
      }]
  },
  tokenURI: {
      type: String,
      required: true
  },
  likesCount: {
      type: Number,
      default: 0
  },
  activeListing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing'
  }
}, { 
  timestamps: true 
});

  const NFT = mongoose.models.NFT || mongoose.model('NFT', NFTSchema);
  module.exports = NFT;