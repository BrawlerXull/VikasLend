const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  paidAmount: { type: Number, required: true },
  returnOnLoan: { type: Number, required: true },
  bidAt: { type: Date, default: Date.now },
  interest: {type: Number, required: true},
  status: { type: String, enum: ["accepted", "pending"], default: "pending" },
  bidBy: { type: String, required: true },
});

const loanSchema = new mongoose.Schema({
  address: { type: String, required: true },
  loan: { type: Number, required: true },
  bidCount: { type: Number, required: true, default: 0 },
  paidAmount: { type: Number, required: true },
  returnOnLoan: { type: Number, required: true },
  totalLoanValue: { type: Number, required: true },
  bids: [bidSchema],
  acceptedBid: bidSchema,
  createdAt: { type: Date, default: Date.now },
  loanIndex: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "done"],
    default: "pending",
  },
  lender: String,
  paid: Boolean,
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;