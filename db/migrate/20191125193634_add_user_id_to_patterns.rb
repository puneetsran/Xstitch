class AddUserIdToPatterns < ActiveRecord::Migration[5.2]
  def change
    # add_column :patterns, :user_id, :integer
    add_reference :patterns, :user, foreign_key: true
  end
end
