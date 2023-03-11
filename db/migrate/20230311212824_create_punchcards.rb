class CreatePunchcards < ActiveRecord::Migration[6.1]
  def change
    create_table :punchcards do |t|
      t.string :name
      t.string :type
      t.integer :count
      t.string :qr_code
      t.integer :business_id
      t.integer :user_id

      t.timestamps
    end
  end
end
